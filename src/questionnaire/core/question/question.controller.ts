import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from 'src/questionnaire/dto/create-question.dto';
import { UpdateQuestionDto } from 'src/questionnaire/dto/update-question.dto';
import { Question } from 'src/questionnaire/entities/question.entity';
import { ResponseResult } from 'src/interfaces/result.dto';

@Controller('question')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Post()
    create(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionService.create(createQuestionDto);
    }

    @Get(':id')
    async findAll(@Param('id') id: string): Promise<ResponseResult<Question[]>> {
        const data = await this.questionService.findAll(+id);
        return {
            data,
            message: 'All questions',
            statusCode: HttpStatus.OK,
        };

    }

    @Get('one/:id')
    async findOne(@Param('id') id: string): Promise<ResponseResult<Question | null>> {
        const data = await this.questionService.findOne(+id);
        return {
            data,
            message: 'Question',
            statusCode: HttpStatus.OK,
        }
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
