import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query, HttpStatus, UseFilters } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { QuestionnaireService } from './questionnaire.service';
import { PaginationDto } from 'src/interfaces/pagination.dto';
import { ResponseResult } from 'src/interfaces/result.dto';
import { Questionnaire } from './entities/questionnaire.entity';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';

@Controller('questionnaire')
@UseFilters(new HttpExceptionFilter())
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
      statusCode: HttpStatus.OK,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResponseResult<Questionnaire | null>> {
    const questionnaire = this.questionnaireService.findOne(+id);
    const data = await questionnaire;
    return {
      data,
      message: 'Questionnaire',
      statusCode: HttpStatus.OK,
    };
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
