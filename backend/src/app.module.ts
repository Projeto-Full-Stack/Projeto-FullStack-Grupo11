import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnouncementsModule } from './modules/announcements/announcements.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [AnnouncementsModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
