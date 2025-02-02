import { Injectable, UseFilters } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Questionnaire } from './entities/questionnaire.entity';
import { Repository } from 'typeorm/repository/Repository';
import { UpdateResult } from 'typeorm';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class QuestionnaireService {

  constructor(
    @InjectRepository(Questionnaire)
    private questionnaireRepository: Repository<Questionnaire>,
  ) { }

  create(createQuestionnaireDto: CreateQuestionnaireDto): Promise<Questionnaire> {
    const questionnaire = this.questionnaireRepository.create({
      ...createQuestionnaireDto,
      creationDate: new Date(),
    });

    return this.questionnaireRepository.save(questionnaire);
  }

  findAll(): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find();
  }

  findOne(id: number): Promise<Questionnaire | null> {
    return this.questionnaireRepository.findOneBy({ id });
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto): Promise<UpdateResult> {
    return this.questionnaireRepository.update(id, updateQuestionnaireDto);
  }

  async remove(id: number): Promise<void> {
    await this.questionnaireRepository.delete(id);
  }
}
