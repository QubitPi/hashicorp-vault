/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { datetimeLocalStringFormat } from 'core/utils/date-formatters';

/**
 * @module Messages::MessageExpirationDateForm
 * Messages::MessageExpirationDateForm components are used to display list of messages.
 * @example
 * ```js
 * <Messages::MessageExpirationDateForm @message={{this.message}} @attr={{attr}} />
 * ```
 * @param {array} message - message form data
 */

export default class MessageExpirationDateForm extends Component {
  datetimeLocalStringFormat = datetimeLocalStringFormat;
  @tracked groupValue = 'never';
  @tracked messageEndTime = '';

  constructor() {
    super(...arguments);

    if (this.args.message.end_time) {
      this.groupValue = 'specificDate';
      this.messageEndTime = this.args.message.end_time;
    }
  }

  get validationError() {
    const validations = this.args.modelValidations || {};
    const state = validations[this.args.attr.name];
    return state && !state.isValid ? state.errors.join(' ') : null;
  }

  @action
  specificDateChange() {
    this.groupValue = 'specificDate';
    this.args.message.end_time = this.messageEndTime;
  }

  @action
  onFocusOut(e) {
    this.messageEndTime = e.target.value;
    this.args.message.end_time = this.messageEndTime;
    this.groupValue = 'specificDate';
  }
}
