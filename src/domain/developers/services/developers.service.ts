import { inject, injectable } from 'inversify';
import { DevelopersRepository } from '../repositories/developers.repository';
import { DeveloperFields, IDeveloper } from '../types';

@injectable()
export class DevelopersService {
  constructor(
    @inject('DevelopersRepository')
    private developersRepository: DevelopersRepository,
  ) {}

  getDevelopers(include?: DeveloperFields[]): Promise<Partial<IDeveloper[]>> {
    return this.developersRepository.getDevelopers(include);
  }

  getDeveloperById(
    id: string,
    include?: DeveloperFields[],
  ): Promise<Partial<IDeveloper>> {
    return this.developersRepository.getDeveloperById(id, include);
  }
}
