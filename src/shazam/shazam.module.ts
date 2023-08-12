// src/shazam/shazam.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShazamService } from './shazam.service';
import { HttpModule } from '@nestjs/axios';
import { ShazamController } from './shazam.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot() // Certifique-se de chamar o método forRoot()
  ],
  controllers: [ShazamController],
  providers: [ShazamService, ConfigService], // Adicione o ConfigService aqui
})
export class ShazamModule {}
