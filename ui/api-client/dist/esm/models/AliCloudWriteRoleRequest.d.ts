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
 * @interface AliCloudWriteRoleRequest
 */
export interface AliCloudWriteRoleRequest {
    /**
     * JSON of policies to be dynamically applied to users of this role.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    inlinePolicies?: string;
    /**
     * The maximum allowed lifetime of tokens issued using this role.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    maxTtl?: string;
    /**
     * The name and type of each remote policy to be applied. Example: "name:AliyunRDSReadOnlyAccess,type:System".
     * @type {Array<string>}
     * @memberof AliCloudWriteRoleRequest
     */
    remotePolicies?: Array<string>;
    /**
     * ARN of the role to be assumed. If provided, inline_policies and remote_policies should be blank. At creation time, this role must have configured trusted actors, and the access key and secret that will be used to assume the role (in /config) must qualify as a trusted actor.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    roleArn?: string;
    /**
     * Duration in seconds after which the issued token should expire. Defaults to 0, in which case the value will fallback to the system/mount defaults.
     * @type {string}
     * @memberof AliCloudWriteRoleRequest
     */
    ttl?: string;
}
/**
 * Check if a given object implements the AliCloudWriteRoleRequest interface.
 */
export declare function instanceOfAliCloudWriteRoleRequest(value: object): value is AliCloudWriteRoleRequest;
export declare function AliCloudWriteRoleRequestFromJSON(json: any): AliCloudWriteRoleRequest;
export declare function AliCloudWriteRoleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliCloudWriteRoleRequest;
export declare function AliCloudWriteRoleRequestToJSON(json: any): AliCloudWriteRoleRequest;
export declare function AliCloudWriteRoleRequestToJSONTyped(value?: AliCloudWriteRoleRequest | null, ignoreDiscriminator?: boolean): any;
