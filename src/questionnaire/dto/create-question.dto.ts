import { CreateAnswerDto } from "./create-answer.dto";

export class CreateQuestionDto {
    name: string;
    description: string;
    creationDate: Date;
    questionnaireId: number;
    answers: CreateAnswerDto[];
}