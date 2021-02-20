import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from "./cars.entity";


@Controller('cars')
export class CarsController {
    constructor(private readonly carsService : CarsService) {}

    @Get()
    findAll(): Promise < Cars[] > {
        return this.carsService.findAll();
    }

    @Get("/:id")
    findOne(@Param() par): Promise < Cars > {
        return this.carsService.findOne(par.id);
    }




}
