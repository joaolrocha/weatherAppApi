// src/shazam/shazam.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ShazamService } from './shazam.service';
import { logger } from 'src/winston.config';

@Controller('shazam')
export class ShazamController {
  constructor(private shazamService: ShazamService) {}

  @Get('top-songs')
  getTopSongs(
    @Query('id') id: string,
    @Query('l') l: string
  ) {
    return this.shazamService.getTopSongs(id, l);
  }
}
