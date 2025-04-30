import { HttpResponse } from "../models/http-response-model";

export const ok = async (data:any): Promise<HttpResponse> =>{
    return{
        statusCode: 200,
        body: data
    };
};

export const noContent = async (data: { player: string; }):Promise<HttpResponse> =>{
    return{
        statusCode: 204,
        body: null
    };
;}