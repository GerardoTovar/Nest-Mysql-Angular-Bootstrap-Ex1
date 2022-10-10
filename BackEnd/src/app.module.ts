import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { AutoModule } from './auto/auto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteAutoModule } from './cliente-auto/cliente-auto.module';
/**
 * WARNING
 * Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
 */
@Module({
  imports: [
    ClienteModule,
    AutoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'my_blog',
      entities: [__dirname + '/**/**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    ClienteAutoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
