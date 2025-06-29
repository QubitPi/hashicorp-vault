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
 * @interface PkiWriteExternalPolicyAcmeOrderOrderIdRequest
 */
export interface PkiWriteExternalPolicyAcmeOrderOrderIdRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyAcmeOrderOrderIdRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteExternalPolicyAcmeOrderOrderIdRequest interface.
 */
export declare function instanceOfPkiWriteExternalPolicyAcmeOrderOrderIdRequest(value: object): value is PkiWriteExternalPolicyAcmeOrderOrderIdRequest;
export declare function PkiWriteExternalPolicyAcmeOrderOrderIdRequestFromJSON(json: any): PkiWriteExternalPolicyAcmeOrderOrderIdRequest;
export declare function PkiWriteExternalPolicyAcmeOrderOrderIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyAcmeOrderOrderIdRequest;
export declare function PkiWriteExternalPolicyAcmeOrderOrderIdRequestToJSON(json: any): PkiWriteExternalPolicyAcmeOrderOrderIdRequest;
export declare function PkiWriteExternalPolicyAcmeOrderOrderIdRequestToJSONTyped(value?: PkiWriteExternalPolicyAcmeOrderOrderIdRequest | null, ignoreDiscriminator?: boolean): any;
