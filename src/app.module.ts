import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { ChatModule } from './chat/chat.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    AuthModule,
    ProfileModule,
    HomeModule,
    ChatModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
