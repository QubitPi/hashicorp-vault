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
 * @interface KvV2ReadConfigurationResponse
 */
export interface KvV2ReadConfigurationResponse {
    /**
     * If true, the backend will require the cas parameter to be set for each write
     * @type {boolean}
     * @memberof KvV2ReadConfigurationResponse
     */
    casRequired?: boolean;
    /**
     * The length of time before a version is deleted.
     * @type {string}
     * @memberof KvV2ReadConfigurationResponse
     */
    deleteVersionAfter?: string;
    /**
     * The number of versions to keep for each key.
     * @type {number}
     * @memberof KvV2ReadConfigurationResponse
     */
    maxVersions?: number;
}
/**
 * Check if a given object implements the KvV2ReadConfigurationResponse interface.
 */
export declare function instanceOfKvV2ReadConfigurationResponse(value: object): value is KvV2ReadConfigurationResponse;
export declare function KvV2ReadConfigurationResponseFromJSON(json: any): KvV2ReadConfigurationResponse;
export declare function KvV2ReadConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KvV2ReadConfigurationResponse;
export declare function KvV2ReadConfigurationResponseToJSON(json: any): KvV2ReadConfigurationResponse;
export declare function KvV2ReadConfigurationResponseToJSONTyped(value?: KvV2ReadConfigurationResponse | null, ignoreDiscriminator?: boolean): any;
