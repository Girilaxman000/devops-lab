import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Res } from '@nestjs/common';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Post('/create')
  @UseInterceptors(FileInterceptor('logo'))
  create(
    @Body() createPartyDto: CreatePartyDto,
    @UploadedFile() logo: Express.Multer.File,
  ) {
    createPartyDto.logo = logo.filename;
    return this.partyService.create(createPartyDto);
  }

  @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads' });
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  findAll() {
    return this.partyService.getAll();
    // return 'get parties name from municipality id: ';
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.partyService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePartyDto: UpdatePartyDto) {
  //   return this.partyService.update(+id, updatePartyDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.partyService.remove(+id);
  // }
}
