import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteAuto } from './entities/cliente-auto.entity';
import { ClienteAutoController } from './cliente-auto.controller';
import { ClienteAutoService } from './cliente-auto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteAuto])],
  controllers: [ClienteAutoController],
  providers: [ClienteAutoService],
})
export class ClienteAutoModule {}
