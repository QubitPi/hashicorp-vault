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
 * @interface PkiGenerateInternalKeyRequest
 */
export interface PkiGenerateInternalKeyRequest {
    /**
     * The number of bits to use. Allowed values are 0 (universal default); with rsa key_type: 2048 (default), 3072, 4096 or 8192; with ec key_type: 224, 256 (default), 384, or 521; ignored with ed25519.
     * @type {number}
     * @memberof PkiGenerateInternalKeyRequest
     */
    keyBits?: number;
    /**
     * Optional name to be used for this key
     * @type {string}
     * @memberof PkiGenerateInternalKeyRequest
     */
    keyName?: string;
    /**
     * The type of key to use; defaults to RSA. "rsa" "ec" and "ed25519" are the only valid values.
     * @type {string}
     * @memberof PkiGenerateInternalKeyRequest
     */
    keyType?: PkiGenerateInternalKeyRequestKeyTypeEnum;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_name is required. Ignored for other types.
     * @type {string}
     * @memberof PkiGenerateInternalKeyRequest
     */
    managedKeyId?: string;
    /**
     * The name of the managed key to use when the exported type is kms. When kms type is the key type, this field or managed_key_id is required. Ignored for other types.
     * @type {string}
     * @memberof PkiGenerateInternalKeyRequest
     */
    managedKeyName?: string;
}
/**
* @export
* @enum {string}
*/
export declare enum PkiGenerateInternalKeyRequestKeyTypeEnum {
    RSA = "rsa",
    EC = "ec",
    ED25519 = "ed25519"
}
/**
 * Check if a given object implements the PkiGenerateInternalKeyRequest interface.
 */
export declare function instanceOfPkiGenerateInternalKeyRequest(value: object): value is PkiGenerateInternalKeyRequest;
export declare function PkiGenerateInternalKeyRequestFromJSON(json: any): PkiGenerateInternalKeyRequest;
export declare function PkiGenerateInternalKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiGenerateInternalKeyRequest;
export declare function PkiGenerateInternalKeyRequestToJSON(json: any): PkiGenerateInternalKeyRequest;
export declare function PkiGenerateInternalKeyRequestToJSONTyped(value?: PkiGenerateInternalKeyRequest | null, ignoreDiscriminator?: boolean): any;
