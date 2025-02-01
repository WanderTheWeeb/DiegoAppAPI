import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Questionnaire {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    creationDate: Date;
    @OneToMany(() => Question, (question) => question.questionnaire)
    questions: Question[];
}
