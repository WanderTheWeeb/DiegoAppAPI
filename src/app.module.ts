import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { Questionnaire } from './questionnaire/entities/questionnaire.entity';
import { Question } from './questionnaire/entities/question.entity';
import { Answer } from './questionnaire/entities/answer.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuestionnaireModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


