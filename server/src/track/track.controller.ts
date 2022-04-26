import {Controller, Get} from '@nestjs/common';
import {TrackService} from "./track.service";

@Controller('track')
export class TrackController {

    constructor(private trackService: TrackService) {
    }

    create() {}

    @Get()
    getAll() {
        return 'Настройка Гит!'
    }
    getOne() {}
    delete() {}

}
