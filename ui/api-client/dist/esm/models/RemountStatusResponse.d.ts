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
 * @interface RemountStatusResponse
 */
export interface RemountStatusResponse {
    /**
     *
     * @type {string}
     * @memberof RemountStatusResponse
     */
    migrationId?: string;
    /**
     *
     * @type {object}
     * @memberof RemountStatusResponse
     */
    migrationInfo?: object;
}
/**
 * Check if a given object implements the RemountStatusResponse interface.
 */
export declare function instanceOfRemountStatusResponse(value: object): value is RemountStatusResponse;
export declare function RemountStatusResponseFromJSON(json: any): RemountStatusResponse;
export declare function RemountStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemountStatusResponse;
export declare function RemountStatusResponseToJSON(json: any): RemountStatusResponse;
export declare function RemountStatusResponseToJSONTyped(value?: RemountStatusResponse | null, ignoreDiscriminator?: boolean): any;
