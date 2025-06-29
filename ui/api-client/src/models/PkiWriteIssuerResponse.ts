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
 * @interface PkiWriteIssuerResponse
 */
export interface PkiWriteIssuerResponse {
    /**
     * CA Chain
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    caChain?: Array<string>;
    /**
     * Certificate
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    certificate?: string;
    /**
     * CRL Distribution Points
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    crlDistributionPoints?: Array<string>;
    /**
     * Delta CRL Distribution Points
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    deltaCrlDistributionPoints?: Array<string>;
    /**
     * Whether critical extension checks should be performed when issuing certificates. (Enterprise only)
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    disableCriticalExtensionChecks?: boolean;
    /**
     * Whether the issuer name check should be performed when issuing certificates. (Enterprise only)
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    disableNameChecks?: boolean;
    /**
     * Whether name contraint checks shoul be performed when issuing certificates. (Enterprise only)
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    disableNameConstraintChecks?: boolean;
    /**
     * Whether max path length checks should be performed when issuing certificates. (Enterprise only)
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    disablePathLengthChecks?: boolean;
    /**
     * Whether or not templating is enabled for AIA fields
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    enableAiaUrlTemplating?: boolean;
    /**
     * Issuer Id
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    issuerId?: string;
    /**
     * Issuer Name
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    issuerName?: string;
    /**
     * Issuing Certificates
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    issuingCertificates?: Array<string>;
    /**
     * Key Id
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    keyId?: string;
    /**
     * Leaf Not After Behavior
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    leafNotAfterBehavior?: string;
    /**
     * Manual Chain
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    manualChain?: Array<string>;
    /**
     * OCSP Servers
     * @type {Array<string>}
     * @memberof PkiWriteIssuerResponse
     */
    ocspServers?: Array<string>;
    /**
     * Revocation Signature Alogrithm
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    revocationSignatureAlgorithm?: string;
    /**
     * Revocation time
     * @type {number}
     * @memberof PkiWriteIssuerResponse
     */
    revocationTime?: number;
    /**
     * Revocation time RFC 3339 formatted
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    revocationTimeRfc3339?: string;
    /**
     * Revoked
     * @type {boolean}
     * @memberof PkiWriteIssuerResponse
     */
    revoked?: boolean;
    /**
     * Usage
     * @type {string}
     * @memberof PkiWriteIssuerResponse
     */
    usage?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerResponse interface.
 */
export function instanceOfPkiWriteIssuerResponse(value: object): value is PkiWriteIssuerResponse {
    return true;
}

export function PkiWriteIssuerResponseFromJSON(json: any): PkiWriteIssuerResponse {
    return PkiWriteIssuerResponseFromJSONTyped(json, false);
}

export function PkiWriteIssuerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'caChain': json['ca_chain'] == null ? undefined : json['ca_chain'],
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'crlDistributionPoints': json['crl_distribution_points'] == null ? undefined : json['crl_distribution_points'],
        'deltaCrlDistributionPoints': json['delta_crl_distribution_points'] == null ? undefined : json['delta_crl_distribution_points'],
        'disableCriticalExtensionChecks': json['disable_critical_extension_checks'] == null ? undefined : json['disable_critical_extension_checks'],
        'disableNameChecks': json['disable_name_checks'] == null ? undefined : json['disable_name_checks'],
        'disableNameConstraintChecks': json['disable_name_constraint_checks'] == null ? undefined : json['disable_name_constraint_checks'],
        'disablePathLengthChecks': json['disable_path_length_checks'] == null ? undefined : json['disable_path_length_checks'],
        'enableAiaUrlTemplating': json['enable_aia_url_templating'] == null ? undefined : json['enable_aia_url_templating'],
        'issuerId': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'issuerName': json['issuer_name'] == null ? undefined : json['issuer_name'],
        'issuingCertificates': json['issuing_certificates'] == null ? undefined : json['issuing_certificates'],
        'keyId': json['key_id'] == null ? undefined : json['key_id'],
        'leafNotAfterBehavior': json['leaf_not_after_behavior'] == null ? undefined : json['leaf_not_after_behavior'],
        'manualChain': json['manual_chain'] == null ? undefined : json['manual_chain'],
        'ocspServers': json['ocsp_servers'] == null ? undefined : json['ocsp_servers'],
        'revocationSignatureAlgorithm': json['revocation_signature_algorithm'] == null ? undefined : json['revocation_signature_algorithm'],
        'revocationTime': json['revocation_time'] == null ? undefined : json['revocation_time'],
        'revocationTimeRfc3339': json['revocation_time_rfc3339'] == null ? undefined : json['revocation_time_rfc3339'],
        'revoked': json['revoked'] == null ? undefined : json['revoked'],
        'usage': json['usage'] == null ? undefined : json['usage'],
    };
}

export function PkiWriteIssuerResponseToJSON(json: any): PkiWriteIssuerResponse {
    return PkiWriteIssuerResponseToJSONTyped(json, false);
}

export function PkiWriteIssuerResponseToJSONTyped(value?: PkiWriteIssuerResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca_chain': value['caChain'],
        'certificate': value['certificate'],
        'crl_distribution_points': value['crlDistributionPoints'],
        'delta_crl_distribution_points': value['deltaCrlDistributionPoints'],
        'disable_critical_extension_checks': value['disableCriticalExtensionChecks'],
        'disable_name_checks': value['disableNameChecks'],
        'disable_name_constraint_checks': value['disableNameConstraintChecks'],
        'disable_path_length_checks': value['disablePathLengthChecks'],
        'enable_aia_url_templating': value['enableAiaUrlTemplating'],
        'issuer_id': value['issuerId'],
        'issuer_name': value['issuerName'],
        'issuing_certificates': value['issuingCertificates'],
        'key_id': value['keyId'],
        'leaf_not_after_behavior': value['leafNotAfterBehavior'],
        'manual_chain': value['manualChain'],
        'ocsp_servers': value['ocspServers'],
        'revocation_signature_algorithm': value['revocationSignatureAlgorithm'],
        'revocation_time': value['revocationTime'],
        'revocation_time_rfc3339': value['revocationTimeRfc3339'],
        'revoked': value['revoked'],
        'usage': value['usage'],
    };
}

