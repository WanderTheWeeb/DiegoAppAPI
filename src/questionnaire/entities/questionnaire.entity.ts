import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    @CreateDateColumn()
    creationDate: Date;
    @OneToMany(() => Question, (question) => question.questionnaire, { cascade: true })
    questions: Question[];
}
