import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {

    constructor(private readonly answerService: AnswerService) { }

    @Post()
    create() {
        // return this.answerService.create();
    }

    @Get()
    findAll() {
        return this.answerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.answerService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string) {
        // return this.answerService.update(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.answerService.remove(+id);
    }
}
