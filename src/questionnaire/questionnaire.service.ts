import { Injectable } from '@nestjs/common';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Questionnaire } from './entities/questionnaire.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class QuestionnaireService {

  constructor(
    @InjectRepository(Questionnaire)
    private questionnaireRepository: Repository<Questionnaire>,
  ) { }

  create(createQuestionnaireDto: CreateQuestionnaireDto) {
    // TODO: Implement this method
    return 'This action adds a new questionnaire';
  }

  findAll(): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find();
  }

  findOne(id: number): Promise<Questionnaire | null> {
    return this.questionnaireRepository.findOneBy({ id });
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    // TODO: Implement this method
    return `This action updates a #${id} questionnaire`;
  }

  async remove(id: number): Promise<void> {
    await this.questionnaireRepository.delete(id);
  }
}
