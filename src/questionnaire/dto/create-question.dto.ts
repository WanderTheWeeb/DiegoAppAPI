import { CreateAnswerDto } from "./create-answer.dto";

export class CreateQuestionDto {
    name: string;
    description: string;
    questionnaireId: number;
    answers: CreateAnswerDto[];
}