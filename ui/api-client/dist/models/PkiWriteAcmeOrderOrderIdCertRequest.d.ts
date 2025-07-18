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
 * @interface PkiWriteAcmeOrderOrderIdCertRequest
 */
export interface PkiWriteAcmeOrderOrderIdCertRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteAcmeOrderOrderIdCertRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteAcmeOrderOrderIdCertRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteAcmeOrderOrderIdCertRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteAcmeOrderOrderIdCertRequest interface.
 */
export declare function instanceOfPkiWriteAcmeOrderOrderIdCertRequest(value: object): value is PkiWriteAcmeOrderOrderIdCertRequest;
export declare function PkiWriteAcmeOrderOrderIdCertRequestFromJSON(json: any): PkiWriteAcmeOrderOrderIdCertRequest;
export declare function PkiWriteAcmeOrderOrderIdCertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteAcmeOrderOrderIdCertRequest;
export declare function PkiWriteAcmeOrderOrderIdCertRequestToJSON(json: any): PkiWriteAcmeOrderOrderIdCertRequest;
export declare function PkiWriteAcmeOrderOrderIdCertRequestToJSONTyped(value?: PkiWriteAcmeOrderOrderIdCertRequest | null, ignoreDiscriminator?: boolean): any;
