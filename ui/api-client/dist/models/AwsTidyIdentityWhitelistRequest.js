"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAwsTidyIdentityWhitelistRequest = instanceOfAwsTidyIdentityWhitelistRequest;
exports.AwsTidyIdentityWhitelistRequestFromJSON = AwsTidyIdentityWhitelistRequestFromJSON;
exports.AwsTidyIdentityWhitelistRequestFromJSONTyped = AwsTidyIdentityWhitelistRequestFromJSONTyped;
exports.AwsTidyIdentityWhitelistRequestToJSON = AwsTidyIdentityWhitelistRequestToJSON;
exports.AwsTidyIdentityWhitelistRequestToJSONTyped = AwsTidyIdentityWhitelistRequestToJSONTyped;
/**
 * Check if a given object implements the AwsTidyIdentityWhitelistRequest interface.
 */
function instanceOfAwsTidyIdentityWhitelistRequest(value) {
    return true;
}
function AwsTidyIdentityWhitelistRequestFromJSON(json) {
    return AwsTidyIdentityWhitelistRequestFromJSONTyped(json, false);
}
function AwsTidyIdentityWhitelistRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'safetyBuffer': json['safety_buffer'] == null ? undefined : json['safety_buffer'],
    };
}
function AwsTidyIdentityWhitelistRequestToJSON(json) {
    return AwsTidyIdentityWhitelistRequestToJSONTyped(json, false);
}
function AwsTidyIdentityWhitelistRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'safety_buffer': value['safetyBuffer'],
    };
}
