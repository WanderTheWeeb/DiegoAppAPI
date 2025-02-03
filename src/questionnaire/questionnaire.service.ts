import { Injectable, UseFilters } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Questionnaire } from './entities/questionnaire.entity';
import { Repository } from 'typeorm/repository/Repository';
import { UpdateResult } from 'typeorm';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';
import { PaginationDto } from 'src/interfaces/pagination.dto';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class QuestionnaireService {

  constructor(
    @InjectRepository(Questionnaire)
    private questionnaireRepository: Repository<Questionnaire>,
  ) { }

  create(createQuestionnaireDto: CreateQuestionnaireDto): Promise<Questionnaire> {
    return this.questionnaireRepository.save(createQuestionnaireDto);
  }

  findAll(pagination: PaginationDto): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find({
      relations: ['questions', 'questions.answers'],
      skip: pagination.page as number,
      take: pagination.limit as number,
    });
  }

  findOne(id: number): Promise<Questionnaire | null> {
    return this.questionnaireRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.answers'],

    });
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto): Promise<UpdateResult> {
    return this.questionnaireRepository.update(id, updateQuestionnaireDto);
  }

  async remove(id: number): Promise<void> {
    await this.questionnaireRepository.delete(id);
  }
}
