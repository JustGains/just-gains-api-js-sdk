/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  JustGainsBasicResponse,
  justGainsBasicResponseSchema,
} from '../models/justGainsBasicResponse';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import {
  PublishedStatus,
  publishedStatusSchema,
} from '../models/publishedStatus';
import {
  PublishedStatusListResponse,
  publishedStatusListResponseSchema,
} from '../models/publishedStatusListResponse';
import {
  PublishedStatusTranslation,
  publishedStatusTranslationSchema,
} from '../models/publishedStatusTranslation';
import {
  PublishedStatusTranslationListResponse,
  publishedStatusTranslationListResponseSchema,
} from '../models/publishedStatusTranslationListResponse';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class CommonPublishedStatusController extends BaseController {
  /**
   * @param localeCode  Locale code for translations (e.g., en-US)
   * @param localeCodes The array of locales for the instructions (e.g., 'en-US', 'es-ES')
   * @return Response from the API call
   */
  async getAllPublishedStatus(
    localeCode?: string,
    localeCodes?: string[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublishedStatusListResponse>> {
    const req = this.createRequest('GET', '/published-status');
    const mapped = req.prepareArgs({
      localeCode: [localeCode, optional(string())],
      localeCodes: [localeCodes, optional(array(string()))],
    });
    req.query('localeCode', mapped.localeCode);
    req.query('localeCodes', mapped.localeCodes);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.authenticate(false);
    return req.callAsJson(publishedStatusListResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async createANewPublishedStatus(
    body: PublishedStatus,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('POST', '/published-status');
    const mapped = req.prepareArgs({ body: [body, publishedStatusSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @param publishedStatusCode
   * @param body
   * @return Response from the API call
   */
  async updateAPublishedStatus(
    publishedStatusCode: string,
    body: PublishedStatus,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      publishedStatusCode: [publishedStatusCode, string()],
      body: [body, publishedStatusSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/published-status/${mapped.publishedStatusCode}`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(404, JustGainsErrorResponseError, 'Published status not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }

  /**
   * @param publishedStatusCode
   * @return Response from the API call
   */
  async deleteAPublishedStatus(
    publishedStatusCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      publishedStatusCode: [publishedStatusCode, string()],
    });
    req.appendTemplatePath`/published-status/${mapped.publishedStatusCode}`;
    req.throwOn(404, JustGainsErrorResponseError, 'Published status not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @param publishedStatusCode The unique code of the published status
   * @return Response from the API call
   */
  async getAllPublishedStatusTranslations(
    publishedStatusCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PublishedStatusTranslationListResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      publishedStatusCode: [publishedStatusCode, string()],
    });
    req.appendTemplatePath`/published-status/${mapped.publishedStatusCode}/translations`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(404, JustGainsErrorResponseError, 'Published status not found');
    req.authenticate(false);
    return req.callAsJson(
      publishedStatusTranslationListResponseSchema,
      requestOptions
    );
  }

  /**
   * @param publishedStatusCode The unique code of the published status
   * @param body
   * @return Response from the API call
   */
  async updatePublishedStatusTranslations(
    publishedStatusCode: string,
    body: PublishedStatusTranslation[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      publishedStatusCode: [publishedStatusCode, string()],
      body: [body, array(publishedStatusTranslationSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/published-status/${mapped.publishedStatusCode}/translations`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(401, JustGainsErrorResponseError, 'Unauthorized');
    req.throwOn(404, JustGainsErrorResponseError, 'Published status not found');
    req.throwOn(422, JustGainsErrorResponseError, 'Unprocessable Entity');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }
}
