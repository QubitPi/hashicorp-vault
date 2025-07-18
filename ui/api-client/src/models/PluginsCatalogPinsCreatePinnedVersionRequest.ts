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
 * @interface PluginsCatalogPinsCreatePinnedVersionRequest
 */
export interface PluginsCatalogPinsCreatePinnedVersionRequest {
    /**
     * The semantic version of the plugin to use, or image tag if oci_image is provided.
     * @type {string}
     * @memberof PluginsCatalogPinsCreatePinnedVersionRequest
     */
    version?: string;
}

/**
 * Check if a given object implements the PluginsCatalogPinsCreatePinnedVersionRequest interface.
 */
export function instanceOfPluginsCatalogPinsCreatePinnedVersionRequest(value: object): value is PluginsCatalogPinsCreatePinnedVersionRequest {
    return true;
}

export function PluginsCatalogPinsCreatePinnedVersionRequestFromJSON(json: any): PluginsCatalogPinsCreatePinnedVersionRequest {
    return PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped(json, false);
}

export function PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsCatalogPinsCreatePinnedVersionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function PluginsCatalogPinsCreatePinnedVersionRequestToJSON(json: any): PluginsCatalogPinsCreatePinnedVersionRequest {
    return PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped(json, false);
}

export function PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped(value?: PluginsCatalogPinsCreatePinnedVersionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
    };
}

