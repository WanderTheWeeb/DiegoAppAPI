import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from 'src/questionnaire/dto/create-question.dto';
import { UpdateQuestionDto } from 'src/questionnaire/dto/update-question.dto';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Post()
    create(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionService.create(createQuestionDto);
    }

    @Get()
    findAll() {
        return this.questionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.questionService.findOne(+id);
    }

    @Put(':id')
    update(@Body() updateQuestion: UpdateQuestionDto, @Param('id') id: string) {
        return this.questionService.update(+id, updateQuestion);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.questionService.remove(+id);
    }

}
