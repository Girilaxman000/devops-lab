import {
  EntityRepository,
  Repository,
  getMongoRepository,
  Like,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Party } from './party.entity';
import { CreatePartyDto } from './dto/create-party.dto';

@EntityRepository(Party)
export class PartyRepository extends Repository<Party> {
  async createParty(createPartyDto: CreatePartyDto): Promise<Party> {
    const { party_name, logo } = createPartyDto;
    const party = new Party();
    party.party_id = uuid();
    party.party_name = party_name;
    party.logo = logo;
    return this.save(party);
  }

  async findAll(): Promise<Party[]> {
    return this.find();
  }
}
