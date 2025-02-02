import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from 'src/questionnaire/dto/create-answer.dto';
import { UpdateAnswerDto } from 'src/questionnaire/dto/update-answer.dto';

@Controller('answer')
export class AnswerController {

    constructor(private readonly answerService: AnswerService) { }

    @Post()
    create(@Body() createAnswerDto: CreateAnswerDto) {
        return this.answerService.create(createAnswerDto);
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
    update(@Body() updateAnswer: UpdateAnswerDto, @Param('id') id: string) {
        return this.answerService.update(+id, updateAnswer);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.answerService.remove(+id);
    }
}
