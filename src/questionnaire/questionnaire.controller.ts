import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { QuestionnaireService } from './questionnaire.service';
import { PaginationDto } from 'src/interfaces/pagination.dto';
import { ResponseResult } from 'src/interfaces/result.dto';
import { Questionnaire } from './entities/questionnaire.entity';

@Controller('questionnaire')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) { }

  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnaireService.create(createQuestionnaireDto);
  }

  @Get()
  async findAll(@Query() paginationDto: PaginationDto): Promise<ResponseResult<Questionnaire[]>> {
    const questionnaires = this.questionnaireService.findAll(paginationDto);
    const data = await questionnaires;
    return {
      data,
      message: 'All questionnaires',
      statusCode: 200,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionnaireService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return this.questionnaireService.update(+id, updateQuestionnaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionnaireService.remove(+id);
  }
}
