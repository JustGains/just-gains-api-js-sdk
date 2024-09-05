/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import {
  RoleAssignmentRequest,
  roleAssignmentRequestSchema,
} from '../models/roleAssignmentRequest';
import {
  RoleCreateRequest,
  roleCreateRequestSchema,
} from '../models/roleCreateRequest';
import { RolesResponse, rolesResponseSchema } from '../models/rolesResponse';
import { RolesResponse1, rolesResponse1Schema } from '../models/rolesResponse1';
import {
  RoleUpdateRequest,
  roleUpdateRequestSchema,
} from '../models/roleUpdateRequest';
import {
  UsersRolesResponse,
  usersRolesResponseSchema,
} from '../models/usersRolesResponse';
import { string } from '../schema';
import { BaseController } from './baseController';

export class UsersRoleManagementController extends BaseController {
  /**
   * @param userId
   * @param body
   * @return Response from the API call
   */
  async assignARoleToAUser(
    userId: string,
    body: RoleAssignmentRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsersRolesResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      body: [body, roleAssignmentRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/users/${mapped.userId}/roles`;
    req.authenticate([]);
    return req.callAsJson(usersRolesResponseSchema, requestOptions);
  }

  /**
   * @param userId
   * @return Response from the API call
   */
  async getUserRoles(
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<UsersRolesResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ userId: [userId, string()] });
    req.appendTemplatePath`/users/${mapped.userId}/roles`;
    req.authenticate([]);
    return req.callAsJson(usersRolesResponseSchema, requestOptions);
  }

  /**
   * @param userId
   * @param roleName
   * @return Response from the API call
   */
  async removeARoleFromAUser(
    userId: string,
    roleName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      userId: [userId, string()],
      roleName: [roleName, string()],
    });
    req.appendTemplatePath`/users/${mapped.userId}/roles/${mapped.roleName}`;
    req.authenticate([]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async getAllRoles(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RolesResponse>> {
    const req = this.createRequest('GET', '/roles');
    req.authenticate([]);
    return req.callAsJson(rolesResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async createANewRole(
    body: RoleCreateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RolesResponse1>> {
    const req = this.createRequest('POST', '/roles');
    const mapped = req.prepareArgs({ body: [body, roleCreateRequestSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([]);
    return req.callAsJson(rolesResponse1Schema, requestOptions);
  }

  /**
   * @param roleName
   * @param body
   * @return Response from the API call
   */
  async updateARole(
    roleName: string,
    body: RoleUpdateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<RolesResponse1>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      roleName: [roleName, string()],
      body: [body, roleUpdateRequestSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/roles/${mapped.roleName}`;
    req.authenticate([]);
    return req.callAsJson(rolesResponse1Schema, requestOptions);
  }

  /**
   * @param roleName
   * @return Response from the API call
   */
  async deleteARole(
    roleName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ roleName: [roleName, string()] });
    req.appendTemplatePath`/roles/${mapped.roleName}`;
    req.authenticate([]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }
}