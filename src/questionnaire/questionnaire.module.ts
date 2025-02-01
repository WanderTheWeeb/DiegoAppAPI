import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Question } from './entities/question.entity';
import { Questionnaire } from './entities/questionnaire.entity';
import { QuestionController } from './core/question/question.controller';
import { AnswerController } from './core/answer/answer.controller';
import { QuestionService } from './core/question/question.service';
import { AnswerService } from './core/answer/answer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire, Question, Answer])],
  controllers: [QuestionnaireController, QuestionController, AnswerController],
  providers: [QuestionnaireService, QuestionService, AnswerService],
})
export class QuestionnaireModule { }
