import { Module } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { MunicipalityController } from './municipality.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipalityRepository } from './municipality.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([MunicipalityRepository]), AuthModule],
  controllers: [MunicipalityController],
  providers: [MunicipalityService]
})
export class MunicipalityModule {}
