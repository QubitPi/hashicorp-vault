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
 * @interface PersonaCreateRequest
 */
export interface PersonaCreateRequest {
    /**
     * Entity ID to which this persona belongs to
     * @type {string}
     * @memberof PersonaCreateRequest
     */
    entityId?: string;
    /**
     * ID of the persona
     * @type {string}
     * @memberof PersonaCreateRequest
     */
    id?: string;
    /**
     * Metadata to be associated with the persona. In CLI, this parameter can be repeated multiple times, and it all gets merged together. For example: vault <command> <path> metadata=key1=value1 metadata=key2=value2
     * @type {object}
     * @memberof PersonaCreateRequest
     */
    metadata?: object;
    /**
     * Mount accessor to which this persona belongs to
     * @type {string}
     * @memberof PersonaCreateRequest
     */
    mountAccessor?: string;
    /**
     * Name of the persona
     * @type {string}
     * @memberof PersonaCreateRequest
     */
    name?: string;
}
/**
 * Check if a given object implements the PersonaCreateRequest interface.
 */
export declare function instanceOfPersonaCreateRequest(value: object): value is PersonaCreateRequest;
export declare function PersonaCreateRequestFromJSON(json: any): PersonaCreateRequest;
export declare function PersonaCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonaCreateRequest;
export declare function PersonaCreateRequestToJSON(json: any): PersonaCreateRequest;
export declare function PersonaCreateRequestToJSONTyped(value?: PersonaCreateRequest | null, ignoreDiscriminator?: boolean): any;
