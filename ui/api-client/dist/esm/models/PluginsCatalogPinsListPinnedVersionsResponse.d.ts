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
 *
 * @export
 * @interface PluginsCatalogPinsListPinnedVersionsResponse
 */
export interface PluginsCatalogPinsListPinnedVersionsResponse {
    /**
     *
     * @type {object}
     * @memberof PluginsCatalogPinsListPinnedVersionsResponse
     */
    pinnedVersions?: object;
}
/**
 * Check if a given object implements the PluginsCatalogPinsListPinnedVersionsResponse interface.
 */
export declare function instanceOfPluginsCatalogPinsListPinnedVersionsResponse(value: object): value is PluginsCatalogPinsListPinnedVersionsResponse;
export declare function PluginsCatalogPinsListPinnedVersionsResponseFromJSON(json: any): PluginsCatalogPinsListPinnedVersionsResponse;
export declare function PluginsCatalogPinsListPinnedVersionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsCatalogPinsListPinnedVersionsResponse;
export declare function PluginsCatalogPinsListPinnedVersionsResponseToJSON(json: any): PluginsCatalogPinsListPinnedVersionsResponse;
export declare function PluginsCatalogPinsListPinnedVersionsResponseToJSONTyped(value?: PluginsCatalogPinsListPinnedVersionsResponse | null, ignoreDiscriminator?: boolean): any;
