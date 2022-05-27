import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PartyRepository } from './party.repository';

@Injectable()
export class PartyService {
  constructor(
    @InjectRepository(PartyRepository)
    private partyRepository: PartyRepository,
  ) {}
  create(createPartyDto: CreatePartyDto) {
    return this.partyRepository.createParty(createPartyDto);
  }

  getAll() {
    const result = this.partyRepository.findAll();

    if (!result) {
      return console.error('could not find party');
    } else {
      return result;
    }
  }

  // findAll() {
  //   return `This action returns all party`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} party`;
  // }

  // update(id: number, updatePartyDto: UpdatePartyDto) {
  //   return `This action updates a #${id} party`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} party`;
  // }
}
