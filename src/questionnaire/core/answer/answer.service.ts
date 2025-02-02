import { Injectable, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpExceptionFilter } from 'src/errors/http-exception.filter';
import { CreateAnswerDto } from 'src/questionnaire/dto/create-answer.dto';
import { UpdateAnswerDto } from 'src/questionnaire/dto/update-answer.dto';
import { Answer } from 'src/questionnaire/entities/answer.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class AnswerService {

    constructor(
        @InjectRepository(Answer)
        private answerRepository: Repository<Answer>,
    ) { }

    create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
        return this.answerRepository.save(createAnswerDto);
    }

    findAll(): Promise<Answer[]> {
        return this.answerRepository.find();
    }

    findOne(id: number): Promise<Answer | null> {
        return this.answerRepository.findOneBy({ id });
    }

    update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<UpdateResult> {
        return this.answerRepository.update(id, updateAnswerDto);
    }

    async remove(id: number): Promise<void> {
        await this.answerRepository.delete(id);
    }
}
