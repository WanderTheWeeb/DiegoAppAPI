import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from 'src/questionnaire/entities/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }

    create(createQuestionDto: any) {
        // TODO: create a new question
     }

    findAll(): Promise<Question[]> {
        return this.questionRepository.find();
    }

    findOne(id: number): Promise<Question | null> {
        return this.questionRepository.findOneBy({ id });
    }

    update(id: number, updateQuestionDto: any) {
        // TODO: update a question
     }

    async remove(id: number): Promise<void> {
        await this.questionRepository.delete(id);
    }
}
