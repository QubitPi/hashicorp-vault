/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { stringify } from 'core/helpers/stringify';

/**
 * @module KvDataFields is used for rendering the fields associated with kv secret data, it hides/shows a json editor and renders validation errors for the json editor
 *
 * <KvDataFields
 *  @showJson={{true}}
 *  @secret={{@secret}}
 *  @type="edit"
 *  @modelValidations={{this.modelValidations}}
 *  @pathValidations={{this.pathValidations}}
 * />
 *
 * @param {model} secret - Ember data model: 'kv/data', the new record saved by the form
 * @param {boolean} showJson - boolean passed from parent to hide/show json editor
 * @param {object} [modelValidations] - object of errors.  If attr.name is in object and has error message display in AlertInline.
 * @param {callback} [pathValidations] - callback function fired for the path input on key up
 * @param {boolean} [type=null] - can be edit, create, or details. Used to change text for some form labels
 */

export default class KvDataFields extends Component {
  @tracked lintingErrors;

  get startingValue() {
    // must pass the third param called "space" in JSON.stringify to structure object with whitespace
    // otherwise the following codemirror modifier check will pass `this._editor.getValue() !== namedArgs.content` and _setValue will be called.
    // the method _setValue moves the cursor to the beginning of the text field.
    // the effect is that the cursor jumps after the first key input.
    return JSON.stringify({ '': '' }, null, 2);
  }

  get stringifiedSecretData() {
    return this.args.secret?.secretData ? stringify([this.args.secret.secretData], {}) : this.startingValue;
  }

  @action
  handleJson(value) {
    this.lintingErrors = false;

    try {
      this.args.secret.secretData = JSON.parse(value);
    } catch {
      this.lintingErrors = true;
    }
  }
}
