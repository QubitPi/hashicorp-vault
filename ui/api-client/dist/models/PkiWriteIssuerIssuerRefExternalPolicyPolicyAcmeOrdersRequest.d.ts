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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeOrdersRequest | null, ignoreDiscriminator?: boolean): any;
