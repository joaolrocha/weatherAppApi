// src/shazam/shazam.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { logger } from '../winston.config'
import { map } from 'rxjs/operators';



@Injectable()
export class ShazamService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService
  ) {}

   async getTopSongs(id: string, l: string = 'en-US')  {
    const apiKey = this.configService.get<string>('RAPIDAPI_KEY');
    const baseUrl = this.configService.get<string>('BASE_URL_SHAZAM');

    const options = {
      method: 'GET',
      url: `${baseUrl}artists/get-top-songs`,
      params: { id, l },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    try {
      const response = await this.httpService.request(options).pipe(
        map(resp => resp.data)
      )
      logger.info(`Retornando a lista de top-songs`); // Loga a resposta
      return response;
    } catch (error) {
      logger.error(`Error fetching top songs: ${error.message}`, error.stack); // Loga o erro
      throw new Error('Failed to fetch top songs from Shazam'); // Você pode também optar por lançar uma exceção específica do NestJS aqui
    }
  }

  async getListRecomendations(key: number, locale = 'en-US') {
    const apiKey = this.configService.get<string>('RAPIDAPI_KEY');
    const baseUrl = this.configService.get<string>('BASE_URL_SHAZAM');

    const options = {
      method: 'GET',
      url: `${baseUrl}songs/list-recommendations`,
      params: {key, locale},
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    try { 
      const response = await this.httpService.request(options).pipe(map(resp => resp.data))
      return response
    } catch ( error) {
      logger.error('Failed to fetch list of recomendations')
    }
  }
}

