import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars/cars.entity';
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'transportation',
      entities: [Cars],
      synchronize: true,
    }),
    CarsModule
  ],
  providers: [ AppService ],
  controllers: [ AppController ],
})
export class AppModule {}
