import { IsNumber, IsPositive } from "class-validator";

export class PaginationDto {
    @IsNumber()
    @IsPositive()
    page: number;
    @IsNumber()
    @IsPositive()
    limit: number;
    // They might be used in the future
    // sort: string; 
    // order: string;
    // search: string;
    // filter: string;
}