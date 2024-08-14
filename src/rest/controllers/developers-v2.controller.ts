import {
  BaseHttpController,
  controller,
  httpGet,
  interfaces,
  queryParam,
  requestParam,
} from 'inversify-express-utils';
import { ApiOperationGet, ApiPath } from 'swagger-express-ts';
import { inject } from 'inversify';
import { DeveloperFields } from '../../domain/developers/types';
import { DeveloperV2Dto } from '../dto/developers.responses-v2.dto';
import {
  getDeveloperById,
  getDevelopers,
  path
} from '../swagger/developers-v2.swagger.docs';
import { DevelopersService } from '../../domain/developers/services/developers.service';

@controller('/api/v2/developers')
@ApiPath(path)
export class DevelopersController2
  extends BaseHttpController
  implements interfaces.Controller
{
  constructor(
    @inject('DevelopersService') private developersService: DevelopersService,
  ) {
    super();
  }

  @httpGet('/')
  @ApiOperationGet(getDevelopers)
  public async getDevelopers(
    @queryParam('include') include?: DeveloperFields[],
  ): Promise<Partial<DeveloperV2Dto[]>> {
    console.log('include', include);
    return this.developersService.getDevelopers(include);
  }

  @httpGet('/:id')
  @ApiOperationGet(getDeveloperById)
  public async getDeveloperById(
    @requestParam('id') id: string,
    @queryParam('include') include?: DeveloperFields[],
  ): Promise<Partial<DeveloperV2Dto>> {
    return this.developersService.getDeveloperById(id, include);
  }
}
