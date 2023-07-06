import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnouncementsModule } from './modules/announcements/announcements.module';
import { ImagesModule } from './modules/images/images.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { AddressModule } from './modules/address/address.module';
import { CommentsModule } from './modules/comments/comments.module';

@Module({
  imports: [AnnouncementsModule, ImagesModule, UsersModule, AuthModule, AddressModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
