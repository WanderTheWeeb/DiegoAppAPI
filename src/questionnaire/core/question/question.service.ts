import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/questionnaire/dto/create-question.dto';
import { UpdateQuestionDto } from 'src/questionnaire/dto/update-question.dto';
import { Question } from 'src/questionnaire/entities/question.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }

    create(createQuestionDto: CreateQuestionDto): Promise<Question> {
        return this.questionRepository.save(createQuestionDto);
    }

    findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    findOne(id: number): Promise<Question | null> {
        return this.questionRepository.findOneBy({ id });
    }

    update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<UpdateResult> {
        return this.questionRepository.update(id, updateQuestionDto);
    }

    async remove(id: number): Promise<void> {
        await this.questionRepository.delete(id);
    }
}
