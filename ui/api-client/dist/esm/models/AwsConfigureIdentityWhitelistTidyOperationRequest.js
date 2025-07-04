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
/**
 * Check if a given object implements the AwsConfigureIdentityWhitelistTidyOperationRequest interface.
 */
export function instanceOfAwsConfigureIdentityWhitelistTidyOperationRequest(value) {
    return true;
}
export function AwsConfigureIdentityWhitelistTidyOperationRequestFromJSON(json) {
    return AwsConfigureIdentityWhitelistTidyOperationRequestFromJSONTyped(json, false);
}
export function AwsConfigureIdentityWhitelistTidyOperationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'disablePeriodicTidy': json['disable_periodic_tidy'] == null ? undefined : json['disable_periodic_tidy'],
        'safetyBuffer': json['safety_buffer'] == null ? undefined : json['safety_buffer'],
    };
}
export function AwsConfigureIdentityWhitelistTidyOperationRequestToJSON(json) {
    return AwsConfigureIdentityWhitelistTidyOperationRequestToJSONTyped(json, false);
}
export function AwsConfigureIdentityWhitelistTidyOperationRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'disable_periodic_tidy': value['disablePeriodicTidy'],
        'safety_buffer': value['safetyBuffer'],
    };
}
