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
 * @interface TokenRenewRequest
 */
export interface TokenRenewRequest {
    /**
     * The desired increment in seconds to the token expiration
     * @type {string}
     * @memberof TokenRenewRequest
     */
    increment?: string;
    /**
     * Token to renew (request body)
     * @type {string}
     * @memberof TokenRenewRequest
     */
    token?: string;
}

/**
 * Check if a given object implements the TokenRenewRequest interface.
 */
export function instanceOfTokenRenewRequest(value: object): value is TokenRenewRequest {
    return true;
}

export function TokenRenewRequestFromJSON(json: any): TokenRenewRequest {
    return TokenRenewRequestFromJSONTyped(json, false);
}

export function TokenRenewRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenRenewRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'increment': json['increment'] == null ? undefined : json['increment'],
        'token': json['token'] == null ? undefined : json['token'],
    };
}

export function TokenRenewRequestToJSON(json: any): TokenRenewRequest {
    return TokenRenewRequestToJSONTyped(json, false);
}

export function TokenRenewRequestToJSONTyped(value?: TokenRenewRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'increment': value['increment'],
        'token': value['token'],
    };
}

