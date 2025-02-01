import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from 'src/questionnaire/entities/answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnswerService {

    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) {}

    create(createAnswerDto: any) {
        // TODO: Implement this method
    }

    findAll(): Promise<Answer[]> {
        return this.answerRepository.find();
    }
    
    findOne(id: number):Promise<Answer | null> {
        return this.answerRepository.findOneBy({id});
    }

    update(id: number, updateAnswerDto: any) {
        // TODO: Implement this method
    }
    
    async remove(id: number): Promise<void> {
        await this.answerRepository.delete(id);
    }
}
