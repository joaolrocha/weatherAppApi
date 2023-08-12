import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ShazamModule } from './shazam/shazam.module';

@Module({
  imports: [ConfigModule.forRoot(),ShazamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
