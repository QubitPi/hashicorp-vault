/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PkiConfigureScepRequest
 */
export interface PkiConfigureScepRequest {
    /**
     * the list of allowed digest algorithms for SCEP requests
     * @type {Array<string>}
     * @memberof PkiConfigureScepRequest
     */
    allowedDigestAlgorithms?: PkiConfigureScepRequestAllowedDigestAlgorithmsEnum;
    /**
     * the list of allowed encryption algorithms for SCEP requests
     * @type {Array<string>}
     * @memberof PkiConfigureScepRequest
     */
    allowedEncryptionAlgorithms?: PkiConfigureScepRequestAllowedEncryptionAlgorithmsEnum;
    /**
     * A map of authentication type to authentication parameters
     * @type {object}
     * @memberof PkiConfigureScepRequest
     */
    authenticators?: object;
    /**
     * the policy to be used for non-role-qualified SCEP requests; valid values are 'sign-verbatim', or "role:<role_name>" to specify a role to use as this policy.
     * @type {string}
     * @memberof PkiConfigureScepRequest
     */
    defaultPathPolicy?: string;
    /**
     * whether SCEP is enabled, defaults to false
     * @type {boolean}
     * @memberof PkiConfigureScepRequest
     */
    enabled?: boolean;
    /**
     * A map that specifies 3rd party validation of SCEP requests
     * @type {object}
     * @memberof PkiConfigureScepRequest
     */
    externalValidation?: object;
    /**
     * if true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount
     * @type {boolean}
     * @memberof PkiConfigureScepRequest
     */
    restrictCaChainToIssuer?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum PkiConfigureScepRequestAllowedDigestAlgorithmsEnum {
}
/**
* @export
* @enum {string}
*/
export enum PkiConfigureScepRequestAllowedEncryptionAlgorithmsEnum {
}


/**
 * Check if a given object implements the PkiConfigureScepRequest interface.
 */
export function instanceOfPkiConfigureScepRequest(value: object): value is PkiConfigureScepRequest {
    return true;
}

export function PkiConfigureScepRequestFromJSON(json: any): PkiConfigureScepRequest {
    return PkiConfigureScepRequestFromJSONTyped(json, false);
}

export function PkiConfigureScepRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiConfigureScepRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'allowedDigestAlgorithms': json['allowed_digest_algorithms'] == null ? undefined : json['allowed_digest_algorithms'],
        'allowedEncryptionAlgorithms': json['allowed_encryption_algorithms'] == null ? undefined : json['allowed_encryption_algorithms'],
        'authenticators': json['authenticators'] == null ? undefined : json['authenticators'],
        'defaultPathPolicy': json['default_path_policy'] == null ? undefined : json['default_path_policy'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'externalValidation': json['external_validation'] == null ? undefined : json['external_validation'],
        'restrictCaChainToIssuer': json['restrict_ca_chain_to_issuer'] == null ? undefined : json['restrict_ca_chain_to_issuer'],
    };
}

export function PkiConfigureScepRequestToJSON(json: any): PkiConfigureScepRequest {
    return PkiConfigureScepRequestToJSONTyped(json, false);
}

export function PkiConfigureScepRequestToJSONTyped(value?: PkiConfigureScepRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowed_digest_algorithms': value['allowedDigestAlgorithms'],
        'allowed_encryption_algorithms': value['allowedEncryptionAlgorithms'],
        'authenticators': value['authenticators'],
        'default_path_policy': value['defaultPathPolicy'],
        'enabled': value['enabled'],
        'external_validation': value['externalValidation'],
        'restrict_ca_chain_to_issuer': value['restrictCaChainToIssuer'],
    };
}

