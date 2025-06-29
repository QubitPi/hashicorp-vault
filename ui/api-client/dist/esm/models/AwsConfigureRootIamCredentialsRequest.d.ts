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
 * @interface AwsConfigureRootIamCredentialsRequest
 */
export interface AwsConfigureRootIamCredentialsRequest {
    /**
     * Access key with permission to create new keys.
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    accessKey?: string;
    /**
     * If set to true, will deregister all registered rotation jobs from the RotationManager for the plugin.
     * @type {boolean}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    disableAutomatedRotation?: boolean;
    /**
     * Endpoint to custom IAM server URL
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    iamEndpoint?: string;
    /**
     * Audience of plugin identity tokens
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    identityTokenAudience?: string;
    /**
     * Time-to-live of plugin identity tokens
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    identityTokenTtl?: string;
    /**
     * Maximum number of retries for recoverable exceptions of AWS APIs
     * @type {number}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    maxRetries?: number;
    /**
     * Region for API calls.
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    region?: string;
    /**
     * Role ARN to assume for plugin identity token federation
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    roleArn?: string;
    /**
     * TTL for automatic credential rotation of the given username. Mutually exclusive with rotation_schedule
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    rotationPeriod?: string;
    /**
     * CRON-style string that will define the schedule on which rotations should occur. Mutually exclusive with rotation_period
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    rotationSchedule?: string;
    /**
     * Specifies the amount of time in which the rotation is allowed to occur starting from a given rotation_schedule
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    rotationWindow?: string;
    /**
     * Secret key with permission to create new keys.
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    secretKey?: string;
    /**
     * Endpoint to custom STS server URL
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    stsEndpoint?: string;
    /**
     * Fallback endpoints if sts_endpoint is unreachable
     * @type {Array<string>}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    stsFallbackEndpoints?: Array<string>;
    /**
     * Fallback regions if sts_region is unreachable
     * @type {Array<string>}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    stsFallbackRegions?: Array<string>;
    /**
     * Specific region for STS API calls.
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    stsRegion?: string;
    /**
     * Template to generate custom IAM usernames
     * @type {string}
     * @memberof AwsConfigureRootIamCredentialsRequest
     */
    usernameTemplate?: string;
}
/**
 * Check if a given object implements the AwsConfigureRootIamCredentialsRequest interface.
 */
export declare function instanceOfAwsConfigureRootIamCredentialsRequest(value: object): value is AwsConfigureRootIamCredentialsRequest;
export declare function AwsConfigureRootIamCredentialsRequestFromJSON(json: any): AwsConfigureRootIamCredentialsRequest;
export declare function AwsConfigureRootIamCredentialsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwsConfigureRootIamCredentialsRequest;
export declare function AwsConfigureRootIamCredentialsRequestToJSON(json: any): AwsConfigureRootIamCredentialsRequest;
export declare function AwsConfigureRootIamCredentialsRequestToJSONTyped(value?: AwsConfigureRootIamCredentialsRequest | null, ignoreDiscriminator?: boolean): any;
