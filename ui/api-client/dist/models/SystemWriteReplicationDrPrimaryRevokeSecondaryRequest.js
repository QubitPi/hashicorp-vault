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
exports.instanceOfSystemWriteReplicationDrPrimaryRevokeSecondaryRequest = instanceOfSystemWriteReplicationDrPrimaryRevokeSecondaryRequest;
exports.SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSON = SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSON;
exports.SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSONTyped = SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSONTyped;
exports.SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSON = SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSON;
exports.SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSONTyped = SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSONTyped;
/**
 * Check if a given object implements the SystemWriteReplicationDrPrimaryRevokeSecondaryRequest interface.
 */
function instanceOfSystemWriteReplicationDrPrimaryRevokeSecondaryRequest(value) {
    return true;
}
function SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSON(json) {
    return SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSONTyped(json, false);
}
function SystemWriteReplicationDrPrimaryRevokeSecondaryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
    };
}
function SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSON(json) {
    return SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSONTyped(json, false);
}
function SystemWriteReplicationDrPrimaryRevokeSecondaryRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
    };
}
