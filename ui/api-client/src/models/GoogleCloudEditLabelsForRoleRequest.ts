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
 * @interface GoogleCloudEditLabelsForRoleRequest
 */
export interface GoogleCloudEditLabelsForRoleRequest {
    /**
     * BoundLabels to add (in $key:$value)
     * @type {Array<string>}
     * @memberof GoogleCloudEditLabelsForRoleRequest
     */
    add?: Array<string>;
    /**
     * Label key values to remove
     * @type {Array<string>}
     * @memberof GoogleCloudEditLabelsForRoleRequest
     */
    remove?: Array<string>;
}

/**
 * Check if a given object implements the GoogleCloudEditLabelsForRoleRequest interface.
 */
export function instanceOfGoogleCloudEditLabelsForRoleRequest(value: object): value is GoogleCloudEditLabelsForRoleRequest {
    return true;
}

export function GoogleCloudEditLabelsForRoleRequestFromJSON(json: any): GoogleCloudEditLabelsForRoleRequest {
    return GoogleCloudEditLabelsForRoleRequestFromJSONTyped(json, false);
}

export function GoogleCloudEditLabelsForRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleCloudEditLabelsForRoleRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'add': json['add'] == null ? undefined : json['add'],
        'remove': json['remove'] == null ? undefined : json['remove'],
    };
}

export function GoogleCloudEditLabelsForRoleRequestToJSON(json: any): GoogleCloudEditLabelsForRoleRequest {
    return GoogleCloudEditLabelsForRoleRequestToJSONTyped(json, false);
}

export function GoogleCloudEditLabelsForRoleRequestToJSONTyped(value?: GoogleCloudEditLabelsForRoleRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'add': value['add'],
        'remove': value['remove'],
    };
}

