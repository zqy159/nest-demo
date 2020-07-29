import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 加载路由
import { RouterModule } from './module/router.module'
// 加载中间件
import { LoggerMiddleWare } from './common/middleware/logger.middleware'
@Module({
  imports: [RouterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    console.log(LoggerMiddleWare);
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('api');
  }
}
