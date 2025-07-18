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
 * @interface ScepLoginRequest
 */
export interface ScepLoginRequest {
    /**
     * The type of challenge to use for authentication the PKI plugin expects to use
     * @type {string}
     * @memberof ScepLoginRequest
     */
    challengeType?: ScepLoginRequestChallengeTypeEnum;
    /**
     * When using InTune authentication, validate the PKI mount can solve the challenge/response
     * @type {string}
     * @memberof ScepLoginRequest
     */
    challengeValue?: string;
    /**
     * CSR provided through the SCEP protocol.
     * @type {string}
     * @memberof ScepLoginRequest
     */
    csr: string;
    /**
     * The name of the scep role to authenticate against.
     * @type {string}
     * @memberof ScepLoginRequest
     */
    name?: string;
}
/**
* @export
* @enum {string}
*/
export declare enum ScepLoginRequestChallengeTypeEnum {
    STATIC = "static",
    INTUNE = "intune"
}
/**
 * Check if a given object implements the ScepLoginRequest interface.
 */
export declare function instanceOfScepLoginRequest(value: object): value is ScepLoginRequest;
export declare function ScepLoginRequestFromJSON(json: any): ScepLoginRequest;
export declare function ScepLoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScepLoginRequest;
export declare function ScepLoginRequestToJSON(json: any): ScepLoginRequest;
export declare function ScepLoginRequestToJSONTyped(value?: ScepLoginRequest | null, ignoreDiscriminator?: boolean): any;
