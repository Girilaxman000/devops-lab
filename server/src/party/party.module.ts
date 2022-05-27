import { Module } from '@nestjs/common';
import { PartyService } from './party.service';
import { PartyController } from './party.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PartyRepository } from './party.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PartyRepository]), AuthModule],
  controllers: [PartyController],
  providers: [PartyService]
})
export class PartyModule {}
