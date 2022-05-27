import { EntityRepository, Repository, getMongoRepository, Like } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Municipality } from './municipality.entity';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';

@EntityRepository(Municipality)
export class MunicipalityRepository extends Repository<Municipality> {
  async createMunicipality(createMunicipalityDto: CreateMunicipalityDto): Promise<Municipality> {
    const { mun_name } = createMunicipalityDto
    const municipality = new Municipality();
    municipality.mun_id = uuid();
    municipality.mun_name = mun_name
    return this.save(municipality);
  }
}
