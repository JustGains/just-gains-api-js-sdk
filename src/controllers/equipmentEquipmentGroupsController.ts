/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { EquipmentGroup, equipmentGroupSchema } from '../models/equipmentGroup';
import {
  EquipmentGroupsResponse,
  equipmentGroupsResponseSchema,
} from '../models/equipmentGroupsResponse';
import {
  EquipmentGroupsResponse1,
  equipmentGroupsResponse1Schema,
} from '../models/equipmentGroupsResponse1';
import {
  EquipmentGroupsResponse4,
  equipmentGroupsResponse4Schema,
} from '../models/equipmentGroupsResponse4';
import {
  EquipmentGroupsTranslationsResponse,
  equipmentGroupsTranslationsResponseSchema,
} from '../models/equipmentGroupsTranslationsResponse';
import {
  EquipmentGroupsTranslationsResponse1,
  equipmentGroupsTranslationsResponse1Schema,
} from '../models/equipmentGroupsTranslationsResponse1';
import {
  EquipmentGroupTranslation,
  equipmentGroupTranslationSchema,
} from '../models/equipmentGroupTranslation';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { EquipmentGroups400Error } from '../errors/equipmentGroups400Error';
import { EquipmentGroups404Error } from '../errors/equipmentGroups404Error';
import { EquipmentGroupsTranslations400Error } from '../errors/equipmentGroupsTranslations400Error';
import { EquipmentGroupsTranslations404Error } from '../errors/equipmentGroupsTranslations404Error';
import { EquipmentGroupsTranslations422Error } from '../errors/equipmentGroupsTranslations422Error';

export class EquipmentEquipmentGroupsController extends BaseController {
  /**
   * @param localeCode The locale to use for the localized equipment group names.
   * @return Response from the API call
   */
  async getEquipmentGroups(
    localeCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsResponse>> {
    const req = this.createRequest('GET', '/equipment-groups');
    const mapped = req.prepareArgs({
      localeCode: [localeCode, optional(string())],
    });
    req.query('localeCode', mapped.localeCode);
    req.throwOn(400, EquipmentGroups400Error, 'Bad request');
    req.authenticate(false);
    return req.callAsJson(equipmentGroupsResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async addEquipmentGroup(
    body: EquipmentGroup,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsResponse1>> {
    const req = this.createRequest('POST', '/equipment-groups');
    const mapped = req.prepareArgs({ body: [body, equipmentGroupSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, EquipmentGroups400Error, 'Bad request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(equipmentGroupsResponse1Schema, requestOptions);
  }

  /**
   * @param equipmentGroupCode The equipment group code to retrieve.
   * @param localeCode         The locale to use for the localized equipment group names.
   * @return Response from the API call
   */
  async getEquipmentGroup(
    equipmentGroupCode: string,
    localeCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsResponse1>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      equipmentGroupCode: [equipmentGroupCode, string()],
      localeCode: [localeCode, optional(string())],
    });
    req.query('localeCode', mapped.localeCode);
    req.appendTemplatePath`/equipment-groups/${mapped.equipmentGroupCode}`;
    req.throwOn(404, EquipmentGroups404Error, 'Equipment group not found');
    req.authenticate(false);
    return req.callAsJson(equipmentGroupsResponse1Schema, requestOptions);
  }

  /**
   * @param equipmentGroupCode The equipment group code to update.
   * @param body
   * @return Response from the API call
   */
  async updateAnExistingEquipmentGroup(
    equipmentGroupCode: string,
    body: EquipmentGroup,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsResponse1>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      equipmentGroupCode: [equipmentGroupCode, string()],
      body: [body, equipmentGroupSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/equipment-groups/${mapped.equipmentGroupCode}`;
    req.throwOn(400, EquipmentGroups400Error, 'Bad request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(equipmentGroupsResponse1Schema, requestOptions);
  }

  /**
   * @param equipmentGroupCode The equipment group code to delete.
   * @return Response from the API call
   */
  async deleteAnEquipmentGroup(
    equipmentGroupCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsResponse4>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      equipmentGroupCode: [equipmentGroupCode, string()],
    });
    req.appendTemplatePath`/equipment-groups/${mapped.equipmentGroupCode}`;
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(equipmentGroupsResponse4Schema, requestOptions);
  }

  /**
   * @param equipmentGroupCode The unique code of the equipment group
   * @return Response from the API call
   */
  async getEquipmentGroupTranslations(
    equipmentGroupCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsTranslationsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      equipmentGroupCode: [equipmentGroupCode, string()],
    });
    req.appendTemplatePath`/equipment-groups/${mapped.equipmentGroupCode}/translations`;
    req.throwOn(400, EquipmentGroupsTranslations400Error, 'Bad request');
    req.throwOn(
      404,
      EquipmentGroupsTranslations404Error,
      'Equipment group not found'
    );
    req.authenticate(false);
    return req.callAsJson(
      equipmentGroupsTranslationsResponseSchema,
      requestOptions
    );
  }

  /**
   * Updates the translations for a specific equipment group identified by its code.
   *
   * @param equipmentGroupCode The unique code of the equipment group
   * @param body
   * @return Response from the API call
   */
  async updateEquipmentGroupTranslations(
    equipmentGroupCode: string,
    body: EquipmentGroupTranslation[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<EquipmentGroupsTranslationsResponse1>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      equipmentGroupCode: [equipmentGroupCode, string()],
      body: [body, array(equipmentGroupTranslationSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/equipment-groups/${mapped.equipmentGroupCode}/translations`;
    req.throwOn(400, EquipmentGroupsTranslations400Error, 'Bad request');
    req.throwOn(
      404,
      EquipmentGroupsTranslations404Error,
      'Equipment group not found'
    );
    req.throwOn(422, EquipmentGroupsTranslations422Error, 'Validation error');
    req.authenticate([]);
    return req.callAsJson(
      equipmentGroupsTranslationsResponse1Schema,
      requestOptions
    );
  }
}
