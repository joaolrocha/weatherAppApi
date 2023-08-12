// src/shazam/shazam.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { ShazamService } from './shazam.service';

@Controller('shazam')
export class ShazamController {
  constructor(private shazamService: ShazamService) { }

  @Get('top-songs')
  getTopSongs(
    @Query('id') id: string,
    @Query('l') l: string
  ) {
    return this.shazamService.getTopSongs(id, l);
  }

  @Get('list-recomendations')
  getListRecomendations(
    @Query('key') key: number,
    @Query('locale') locale: string,
  ) {
    return this.shazamService.getListRecomendations(key, locale)
  }
}
