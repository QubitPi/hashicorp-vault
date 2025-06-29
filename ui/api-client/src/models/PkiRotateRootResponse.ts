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
 * @interface PkiRotateRootResponse
 */
export interface PkiRotateRootResponse {
    /**
     * The generated self-signed CA certificate.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    certificate?: string;
    /**
     * The expiration of the given issuer.
     * @type {number}
     * @memberof PkiRotateRootResponse
     */
    expiration?: number;
    /**
     * The ID of the issuer
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuerId?: string;
    /**
     * The name of the issuer.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuerName?: string;
    /**
     * The issuing certificate authority.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    issuingCa?: string;
    /**
     * The ID of the key.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    keyId?: string;
    /**
     * The key name if given.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    keyName?: string;
    /**
     * The private key if exported was specified.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    privateKey?: string;
    /**
     * The requested Subject's named serial number.
     * @type {string}
     * @memberof PkiRotateRootResponse
     */
    serialNumber?: string;
}

/**
 * Check if a given object implements the PkiRotateRootResponse interface.
 */
export function instanceOfPkiRotateRootResponse(value: object): value is PkiRotateRootResponse {
    return true;
}

export function PkiRotateRootResponseFromJSON(json: any): PkiRotateRootResponse {
    return PkiRotateRootResponseFromJSONTyped(json, false);
}

export function PkiRotateRootResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiRotateRootResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'certificate': json['certificate'] == null ? undefined : json['certificate'],
        'expiration': json['expiration'] == null ? undefined : json['expiration'],
        'issuerId': json['issuer_id'] == null ? undefined : json['issuer_id'],
        'issuerName': json['issuer_name'] == null ? undefined : json['issuer_name'],
        'issuingCa': json['issuing_ca'] == null ? undefined : json['issuing_ca'],
        'keyId': json['key_id'] == null ? undefined : json['key_id'],
        'keyName': json['key_name'] == null ? undefined : json['key_name'],
        'privateKey': json['private_key'] == null ? undefined : json['private_key'],
        'serialNumber': json['serial_number'] == null ? undefined : json['serial_number'],
    };
}

export function PkiRotateRootResponseToJSON(json: any): PkiRotateRootResponse {
    return PkiRotateRootResponseToJSONTyped(json, false);
}

export function PkiRotateRootResponseToJSONTyped(value?: PkiRotateRootResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certificate': value['certificate'],
        'expiration': value['expiration'],
        'issuer_id': value['issuerId'],
        'issuer_name': value['issuerName'],
        'issuing_ca': value['issuingCa'],
        'key_id': value['keyId'],
        'key_name': value['keyName'],
        'private_key': value['privateKey'],
        'serial_number': value['serialNumber'],
    };
}

