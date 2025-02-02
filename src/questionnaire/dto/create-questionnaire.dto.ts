import { IsNotEmpty, IsString } from "class-validator";
import { Question } from "../entities/question.entity";

export class CreateQuestionnaireDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    description: string;
    questions: Question[];
}
