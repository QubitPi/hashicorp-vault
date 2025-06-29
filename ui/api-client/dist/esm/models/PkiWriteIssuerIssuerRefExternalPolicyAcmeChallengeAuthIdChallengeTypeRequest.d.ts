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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyAcmeChallengeAuthIdChallengeTypeRequest | null, ignoreDiscriminator?: boolean): any;
