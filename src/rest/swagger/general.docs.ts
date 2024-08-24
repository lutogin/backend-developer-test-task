import { SwaggerDefinitionConstant } from 'swagger-express-ts';
import { ISwaggerBuildDefinition } from 'swagger-express-ts/swagger.builder';

export const generalDoc: ISwaggerBuildDefinition = {
  info: {
    title: "Lemon API",
    version: `1.0.0`,
  },
  securityDefinitions: {
  },
  schemes: ['http'],
  models: {
    DeveloperDto: {
      properties: {
        id: { type: SwaggerDefinitionConstant.Model.Property.Type.STRING },
        name: { type: SwaggerDefinitionConstant.Model.Property.Type.STRING },
      },
    },
    DeveloperV2Dto: {
      properties: {
        id: { type: SwaggerDefinitionConstant.Model.Property.Type.STRING },
        name: { type: SwaggerDefinitionConstant.Model.Property.Type.STRING },
      },
    },
  },
}
