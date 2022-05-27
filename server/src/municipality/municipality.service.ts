import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { MunicipalityRepository } from './municipality.repository';

@Injectable()
export class MunicipalityService {
  constructor(
    @InjectRepository(MunicipalityRepository)
    private municipalityRepository: MunicipalityRepository,
  ) {}
  create(createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalityRepository.createMunicipality(createMunicipalityDto);
  }

  // findAll() {
  //   return `This action returns all municipality`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} municipality`;
  // }

  // update(id: number, updateMunicipalityDto: UpdateMunicipalityDto) {
  //   return `This action updates a #${id} municipality`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} municipality`;
  // }
}
