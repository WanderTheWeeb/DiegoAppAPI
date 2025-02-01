import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService,) {}

    @Post()
    create() {
        // TODO: create a new question
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
    update() {
        // TODO: update a question
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.questionService.remove(+id);
    }
    
}
