import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Questionnaire } from "./questionnaire.entity";
import { Answer } from "./answer.entity";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    creationDate: Date;
    @ManyToOne(() => Questionnaire, (questionnaire) => questionnaire.questions)
    questionnaire: Questionnaire;
    @ManyToMany(() => Answer, { cascade: true })
    @JoinTable({ name: 'question_answers' })
    answers: Answer[];
}