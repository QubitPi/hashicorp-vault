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
 * @interface GoogleCloudGenerateStaticAccountKeyRequest
 */
export interface GoogleCloudGenerateStaticAccountKeyRequest {
    /**
     * Private key algorithm for service account key. Defaults to KEY_ALG_RSA_2048."
     * @type {string}
     * @memberof GoogleCloudGenerateStaticAccountKeyRequest
     */
    keyAlgorithm?: string;
    /**
     * Private key type for service account key. Defaults to TYPE_GOOGLE_CREDENTIALS_FILE."
     * @type {string}
     * @memberof GoogleCloudGenerateStaticAccountKeyRequest
     */
    keyType?: string;
    /**
     * Lifetime of the service account key
     * @type {string}
     * @memberof GoogleCloudGenerateStaticAccountKeyRequest
     */
    ttl?: string;
}
/**
 * Check if a given object implements the GoogleCloudGenerateStaticAccountKeyRequest interface.
 */
export declare function instanceOfGoogleCloudGenerateStaticAccountKeyRequest(value: object): value is GoogleCloudGenerateStaticAccountKeyRequest;
export declare function GoogleCloudGenerateStaticAccountKeyRequestFromJSON(json: any): GoogleCloudGenerateStaticAccountKeyRequest;
export declare function GoogleCloudGenerateStaticAccountKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GoogleCloudGenerateStaticAccountKeyRequest;
export declare function GoogleCloudGenerateStaticAccountKeyRequestToJSON(json: any): GoogleCloudGenerateStaticAccountKeyRequest;
export declare function GoogleCloudGenerateStaticAccountKeyRequestToJSONTyped(value?: GoogleCloudGenerateStaticAccountKeyRequest | null, ignoreDiscriminator?: boolean): any;
