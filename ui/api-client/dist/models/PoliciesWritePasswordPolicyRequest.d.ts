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
 * @interface PoliciesWritePasswordPolicyRequest
 */
export interface PoliciesWritePasswordPolicyRequest {
    /**
     * The password policy
     * @type {string}
     * @memberof PoliciesWritePasswordPolicyRequest
     */
    policy?: string;
}
/**
 * Check if a given object implements the PoliciesWritePasswordPolicyRequest interface.
 */
export declare function instanceOfPoliciesWritePasswordPolicyRequest(value: object): value is PoliciesWritePasswordPolicyRequest;
export declare function PoliciesWritePasswordPolicyRequestFromJSON(json: any): PoliciesWritePasswordPolicyRequest;
export declare function PoliciesWritePasswordPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoliciesWritePasswordPolicyRequest;
export declare function PoliciesWritePasswordPolicyRequestToJSON(json: any): PoliciesWritePasswordPolicyRequest;
export declare function PoliciesWritePasswordPolicyRequestToJSONTyped(value?: PoliciesWritePasswordPolicyRequest | null, ignoreDiscriminator?: boolean): any;
