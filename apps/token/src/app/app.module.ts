import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { DatabaseModule, tokenProviders } from '@libs/db';

import { TokenController } from './app.controller';
import { TokenService } from './app.service';
import { JwtConfigService } from './Services/config/jwt-config.service';
import { HeaderMiddleware } from './middleware/header.middleware';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.registerAsync({
      useClass: JwtConfigService,
    }),
  ],
  controllers: [TokenController],
  providers: [TokenService, ...tokenProviders],
})
export class TokenModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HeaderMiddleware).forRoutes('*');
  }
}
