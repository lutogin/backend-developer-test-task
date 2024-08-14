// **************************************************************************
// Репозиторій імітує шар підключення до бази данних. Данні знаходяться в data.ts
// **************************************************************************

import { injectable } from 'inversify';
import { pick } from 'lodash';
import { DeveloperFields, IDeveloper } from '../types';
import { contracts, developers } from './data';

@injectable()
export class DevelopersRepository {
  private static DEFAULT_INCLUDE: DeveloperFields[] = [
    'id',
    'firstName',
    'lastName',
    'email',
  ];

  async getDevelopers(
    include: DeveloperFields[] = DevelopersRepository.DEFAULT_INCLUDE,
  ): Promise<Partial<IDeveloper[]>> {
    const devs = developers.map((d) => pick(d, include)) || [];

    if (include.includes('revenue')) {
      return devs.map((d) => ({
        ...d,
        revenue: contracts.find((c) => c.developerId === d.id)?.amount || 0,
      }));
    }

    return devs;
  }

  async getDeveloperById(
    id: string,
    include: DeveloperFields[] = DevelopersRepository.DEFAULT_INCLUDE,
  ): Promise<Partial<IDeveloper>> {
    const dev = developers.find((d) => d.id === id);

    if (!dev) {
      throw new Error('Developer not found');
    }

    if (include.includes('revenue')) {
      dev.revenue = contracts.find((c) => c.developerId === id)?.amount || 0;
    }

    return pick(dev, include);
  }

  async getContracts() {
    return contracts;
  }
}
