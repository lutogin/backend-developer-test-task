import { ApiModel, ApiModelProperty } from 'swagger-express-ts';
import { IDeveloper } from '../../domain/developers/types';

@ApiModel()
export class DeveloperV2Dto implements IDeveloper {
  @ApiModelProperty({ required: true, type: 'string' })
  id: string;

  @ApiModelProperty()
  firstName?: string;

  @ApiModelProperty()
  lastName?: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  revenue?: number;
}
