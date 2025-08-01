/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import clientsHandler, {
  STATIC_NOW,
  LICENSE_START,
  UPGRADE_DATE,
  STATIC_PREVIOUS_MONTH,
} from 'vault/mirage/handlers/clients';
import syncHandler from 'vault/mirage/handlers/sync';
import sinon from 'sinon';
import { visit, click, findAll, fillIn, currentURL } from '@ember/test-helpers';
import { login } from 'vault/tests/helpers/auth/auth-helpers';
import { GENERAL } from 'vault/tests/helpers/general-selectors';
import { CHARTS, CLIENT_COUNT } from 'vault/tests/helpers/clients/client-count-selectors';
import { formatNumber } from 'core/helpers/format-number';
import timestamp from 'core/utils/timestamp';
import { runCmd, tokenWithPolicyCmd } from 'vault/tests/helpers/commands';
import { selectChoose } from 'ember-power-select/test-support';
import { format } from 'date-fns';

module('Acceptance | clients | overview', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    sinon.replace(timestamp, 'now', sinon.fake.returns(STATIC_NOW));
    clientsHandler(this.server);
    // stub secrets sync being activated
    this.server.get('/sys/activation-flags', function () {
      return {
        data: {
          activated: ['secrets-sync'],
          unactivated: [],
        },
      };
    });
    this.store = this.owner.lookup('service:store');
    await login();
    return visit('/vault/clients/counts/overview');
  });

  test('it should render charts', async function (assert) {
    assert
      .dom(`${GENERAL.flashMessage}.is-info`)
      .includesText(
        'counts returned in this usage period are an estimate',
        'Shows warning from API about client count estimations'
      );
    assert
      .dom(CLIENT_COUNT.dateRange.dateDisplay('start'))
      .hasText('July 2023', 'billing start month is correctly parsed from license');
    assert
      .dom(CLIENT_COUNT.dateRange.dateDisplay('end'))
      .hasText('January 2024', 'billing start month is correctly parsed from license');
    assert
      .dom(CHARTS.container('Vault client counts'))
      .exists('Shows running totals with monthly breakdown charts');
    assert
      .dom(`${CHARTS.container('Vault client counts')} ${CHARTS.xAxisLabel}`)
      .hasText('7/23', 'x-axis labels start with billing start date');
    assert.dom(CHARTS.xAxisLabel).exists({ count: 7 }, 'chart months matches query');
  });

  test('it should update charts when querying date ranges', async function (assert) {
    // query for single, historical month with no new counts (July 2023)
    const service = this.owner.lookup('service:version');
    service.type = 'community';

    const licenseStartMonth = format(LICENSE_START, 'yyyy-MM');
    const upgradeMonth = format(UPGRADE_DATE, 'yyyy-MM');
    const endMonth = format(STATIC_PREVIOUS_MONTH, 'yyyy-MM');
    await click(CLIENT_COUNT.dateRange.edit);
    await fillIn(CLIENT_COUNT.dateRange.editDate('start'), licenseStartMonth);
    await fillIn(CLIENT_COUNT.dateRange.editDate('end'), licenseStartMonth);

    await click(GENERAL.submitButton);
    assert
      .dom(CLIENT_COUNT.usageStats('Vault client counts'))
      .doesNotExist('running total single month stat boxes do not show');
    assert
      .dom(CHARTS.container('Vault client counts'))
      .doesNotExist('running total month over month charts do not show');

    // change to start on month/year of upgrade to 1.10
    await click(CLIENT_COUNT.dateRange.edit);
    await fillIn(CLIENT_COUNT.dateRange.editDate('start'), upgradeMonth);
    await fillIn(CLIENT_COUNT.dateRange.editDate('end'), endMonth);
    await click(GENERAL.submitButton);
    assert
      .dom(CLIENT_COUNT.dateRange.dateDisplay('start'))
      .hasText('September 2023', 'billing start month is correctly parsed from license');
    assert
      .dom(CHARTS.container('Vault client counts'))
      .exists('Shows running totals with monthly breakdown charts');
    assert
      .dom(`${CHARTS.container('Vault client counts')} ${CHARTS.xAxisLabel}`)
      .hasText('9/23', 'x-axis labels start with queried start month (upgrade date)');
    assert.dom(CHARTS.xAxisLabel).exists({ count: 4 }, 'chart months matches query');

    // query for single, historical month (upgrade month)
    await click(CLIENT_COUNT.dateRange.edit);
    await fillIn(CLIENT_COUNT.dateRange.editDate('start'), upgradeMonth);
    await fillIn(CLIENT_COUNT.dateRange.editDate('end'), upgradeMonth);
    await click(GENERAL.submitButton);

    assert
      .dom(CLIENT_COUNT.usageStats('Vault client counts'))
      .exists('running total single month usage stats show');
    assert
      .dom(CHARTS.container('Vault client counts'))
      .doesNotExist('running total month over month charts do not show');

    // query historical date range (from September 2023 to December 2023)
    await click(CLIENT_COUNT.dateRange.edit);
    await fillIn(CLIENT_COUNT.dateRange.editDate('start'), '2023-09');
    await fillIn(CLIENT_COUNT.dateRange.editDate('end'), '2023-12');
    await click(GENERAL.submitButton);

    assert
      .dom(CLIENT_COUNT.dateRange.dateDisplay('start'))
      .hasText('September 2023', 'billing start month is correctly parsed from license');
    assert
      .dom(CLIENT_COUNT.dateRange.dateDisplay('end'))
      .hasText('December 2023', 'billing start month is correctly parsed from license');
    assert
      .dom(CHARTS.container('Vault client counts'))
      .exists('Shows running totals with monthly breakdown charts');

    assert.dom(CHARTS.xAxisLabel).exists({ count: 4 }, 'chart months matches query');
    const xAxisLabels = findAll(CHARTS.xAxisLabel);
    assert
      .dom(xAxisLabels[xAxisLabels.length - 1])
      .hasText('12/23', 'x-axis labels end with queried end month');

    // query month older than count start date
    await click(CLIENT_COUNT.dateRange.edit);
    await fillIn(CLIENT_COUNT.dateRange.editDate('start'), '2020-07');
    await click(GENERAL.submitButton);
    assert
      .dom(CLIENT_COUNT.counts.startDiscrepancy)
      .hasTextContaining(
        'You requested data from July 2020. We only have data from January 2023, and that is what is being shown here.',
        'warning banner displays that date queried was prior to count start date'
      );
  });

  test('totals filter correctly with full data', async function (assert) {
    assert
      .dom(CHARTS.container('Vault client counts'))
      .exists('Shows running totals with monthly breakdown charts');

    const response = await this.store.peekRecord('clients/activity', 'some-activity-id');
    const orderedNs = response.byNamespace.sort((a, b) => b.clients - a.clients);
    const topNamespace = orderedNs[0];
    // the namespace dropdown excludes the current namespace, so use second-largest if that's the case
    const filterNamespace = topNamespace.label === 'root' ? orderedNs[1] : topNamespace;
    const topMount = filterNamespace?.mounts.sort((a, b) => b.clients - a.clients)[0];

    // Filter by top namespace
    await selectChoose(CLIENT_COUNT.nsFilter, filterNamespace.label);
    assert.dom(CLIENT_COUNT.selectedNs).hasText(filterNamespace.label, 'selects top namespace');

    let expectedStats = {
      Entity: formatNumber([filterNamespace.entity_clients]),
      'Non-entity': formatNumber([filterNamespace.non_entity_clients]),
      ACME: formatNumber([filterNamespace.acme_clients]),
      'Secret sync': formatNumber([filterNamespace.secret_syncs]),
    };
    for (const label in expectedStats) {
      assert
        .dom(CLIENT_COUNT.statTextValue(label))
        .includesText(`${expectedStats[label]}`, `label: ${label} renders accurate namespace client counts`);
    }

    // FILTER BY AUTH METHOD
    await selectChoose(CLIENT_COUNT.mountFilter, topMount.label);
    assert.dom(CLIENT_COUNT.selectedAuthMount).hasText(topMount.label, 'selects top mount');

    expectedStats = {
      Entity: formatNumber([topMount.entity_clients]),
      'Non-entity': formatNumber([topMount.non_entity_clients]),
      ACME: formatNumber([topMount.acme_clients]),
      'Secret sync': formatNumber([topMount.secret_syncs]),
    };
    for (const label in expectedStats) {
      assert
        .dom(CLIENT_COUNT.statTextValue(label))
        .includesText(`${expectedStats[label]}`, `label: "${label} "renders accurate mount client counts`);
    }

    // Remove namespace filter without first removing auth method filter
    await click(GENERAL.searchSelect.removeSelected);
    assert.strictEqual(currentURL(), '/vault/clients/counts/overview', 'removes both query params');

    expectedStats = {
      Entity: formatNumber([response.total.entity_clients]),
      'Non-entity': formatNumber([response.total.non_entity_clients]),
      ACME: formatNumber([response.total.acme_clients]),
      'Secret sync': formatNumber([response.total.secret_syncs]),
    };
    for (const label in expectedStats) {
      assert
        .dom(CLIENT_COUNT.statTextValue(label))
        .includesText(`${expectedStats[label]}`, `label: ${label} is back to unfiltered value`);
    }
  });

  test('it updates export button visibility as namespace is filtered', async function (assert) {
    const ns = 'ns7';
    // create a user that only has export access for specific namespace
    const userToken = await runCmd(
      tokenWithPolicyCmd(
        'cc-export',
        `
    path "${ns}/sys/internal/counters/activity/export" {
        capabilities = ["sudo"]
    }
  `
      )
    );
    await login(userToken);
    await visit('/vault/clients/counts/overview');
    assert.dom(CLIENT_COUNT.exportButton).doesNotExist();

    // FILTER BY ALLOWED NAMESPACE
    await selectChoose('#namespace-search-select', ns);

    assert.dom(CLIENT_COUNT.exportButton).exists();
  });
});

module('Acceptance | clients | overview | secrets sync', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it should hide secrets sync stats when feature is NOT on license', async function (assert) {
    // mocks endpoint for no additional license modules
    this.server.get('/sys/license/features', () => ({ features: [] }));

    await login();
    await visit('/vault/clients/counts/overview');
    assert.dom(CLIENT_COUNT.statTextValue('Secret sync')).doesNotExist();
    assert.dom(CLIENT_COUNT.statTextValue('Entity')).exists('other stats are still visible');
    // TODO add assertion sync clients HIDDEN in running total chart and legend
  });

  module('feature is on license', function (hooks) {
    hooks.beforeEach(async function () {
      syncHandler(this.server);
    });

    test('it should show secrets sync stats when the feature is activated', async function (assert) {
      syncHandler(this.server);
      await login();
      await visit('/vault/clients/counts/overview');
      assert.dom(CLIENT_COUNT.statTextValue('Secret sync')).exists('shows secret sync data on overview');
      // TODO add assertion sync clients SHOW in running total chart and legend
    });

    test('it should hide secrets sync stats when feature is NOT activated', async function (assert) {
      this.server.get('/sys/activation-flags', () => {
        return {
          data: { activated: [], unactivated: ['secrets-sync'] },
        };
      });

      await login();
      await visit('/vault/clients/counts/overview');

      assert
        .dom(CLIENT_COUNT.statTextValue('Secret sync'))
        .doesNotExist('stat is hidden because feature is not activated');
      assert.dom(CLIENT_COUNT.statTextValue('Entity')).exists('other stats are still visible');
      // TODO add assertion sync clients HIDDEN in running total chart and legend
    });

    test('it should show secrets sync stats for HVD managed clusters', async function (assert) {
      // mock HVD managed cluster
      this.owner.lookup('service:flags').featureFlags = ['VAULT_CLOUD_ADMIN_NAMESPACE'];

      await login();
      await visit('/vault/clients/counts/overview');
      assert.dom(CLIENT_COUNT.statTextValue('Secret sync')).exists();
      // TODO add assertion sync clients SHOW in running total chart and legend
    });
  });
});
