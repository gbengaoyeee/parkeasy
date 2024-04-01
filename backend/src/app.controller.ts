import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {

    constructor() {}

    @Get()
    getHello(): string {
        console.log('HELLLLOOOO MAKING')
        return 'Welcome to Parkeasy API';
    }
}