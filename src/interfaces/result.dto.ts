export interface ResponseResult<T> {
    data: T;
    message: string;
    statusCode: number;
}