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
 * @interface AppRoleWriteBindSecretIdRequest
 */
export interface AppRoleWriteBindSecretIdRequest {
    /**
     * Impose secret_id to be presented when logging in using this role.
     * @type {boolean}
     * @memberof AppRoleWriteBindSecretIdRequest
     */
    bindSecretId?: boolean;
}
/**
 * Check if a given object implements the AppRoleWriteBindSecretIdRequest interface.
 */
export declare function instanceOfAppRoleWriteBindSecretIdRequest(value: object): value is AppRoleWriteBindSecretIdRequest;
export declare function AppRoleWriteBindSecretIdRequestFromJSON(json: any): AppRoleWriteBindSecretIdRequest;
export declare function AppRoleWriteBindSecretIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteBindSecretIdRequest;
export declare function AppRoleWriteBindSecretIdRequestToJSON(json: any): AppRoleWriteBindSecretIdRequest;
export declare function AppRoleWriteBindSecretIdRequestToJSONTyped(value?: AppRoleWriteBindSecretIdRequest | null, ignoreDiscriminator?: boolean): any;
