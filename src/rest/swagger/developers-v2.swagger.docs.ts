import { IApiOperationArgsBase } from 'swagger-express-ts/i-api-operation-args.base';
import { IApiPathArgs } from 'swagger-express-ts/api-path.decorator';

export const path: IApiPathArgs = {
  path: '/api/v2/developers',
  name: 'DevelopersV2',
};

export const getDevelopers: IApiOperationArgsBase = {
  summary: 'Get full list of developers (v2)',
  path: '/',
  parameters: {
    query: {
      include: {
        required: false,
        name: 'include',
        description: 'Fields to include ["id", "email", "firstName", "lastName", "revenue"]. Default will be returned id, email, firstName, lastName'
      }
    },
  },
  responses: {
    200: {
      description: 'Success',
      type: 'array',
      model: 'DeveloperV2Dto',
    },
  },
};

export const getDeveloperById: IApiOperationArgsBase = {
  summary: 'Get developer by id (v2)',
  path: '/{id}',
  parameters: {
    path: { id: { required: true, name: 'id', description: 'Developer id' } },
    query: {
      include: {
        required: false,
        name: 'include',
        description: 'Fields to include ["id", "email", "firstName", "lastName", "revenue"]. Default will be returned id, email, firstName, lastName'
      }
    },
  },
  responses: {
    200: {
      description: 'Success',
      model: 'DeveloperV2Dto',
    },
  },
};
