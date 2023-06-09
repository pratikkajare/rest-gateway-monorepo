import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';

import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  const USERS_SERVICE_URL = 'http://localhost:3001';
  // const TASKS_SERVICE_URL = 'http://localhost:3332';

  // Proxy endpoints
  app.use(
    '/api/firstApp',
    createProxyMiddleware({
      target: USERS_SERVICE_URL,
      changeOrigin: true,
    }),
  );
  // app.use(
  //   '/api/tasks',
  //   createProxyMiddleware({
  //     target: TASKS_SERVICE_URL,
  //     changeOrigin: true,
  //   }),
  // );
  await app.listen(port);
  // Logger.log(
  //   `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  // );
}
bootstrap();
