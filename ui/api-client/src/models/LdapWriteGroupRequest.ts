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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LdapWriteGroupRequest
 */
export interface LdapWriteGroupRequest {
    /**
     * Comma-separated list of policies associated to the group.
     * @type {Array<string>}
     * @memberof LdapWriteGroupRequest
     */
    policies?: Array<string>;
}

/**
 * Check if a given object implements the LdapWriteGroupRequest interface.
 */
export function instanceOfLdapWriteGroupRequest(value: object): value is LdapWriteGroupRequest {
    return true;
}

export function LdapWriteGroupRequestFromJSON(json: any): LdapWriteGroupRequest {
    return LdapWriteGroupRequestFromJSONTyped(json, false);
}

export function LdapWriteGroupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LdapWriteGroupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'policies': json['policies'] == null ? undefined : json['policies'],
    };
}

export function LdapWriteGroupRequestToJSON(json: any): LdapWriteGroupRequest {
    return LdapWriteGroupRequestToJSONTyped(json, false);
}

export function LdapWriteGroupRequestToJSONTyped(value?: LdapWriteGroupRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'policies': value['policies'],
    };
}

