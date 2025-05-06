import * as playerRepository from "../repositories/player-repository";
import * as HttpResponse from "../utils/http-help";

export const getPlayerService = async () => {
    const data = await playerRepository.findAllPlayers();
    let response = null;

    if(data){
        response = HttpResponse.ok(data);
    }else {
        response = HttpResponse.noContent();
    }

    return response;
};


export const getPLayerByIdServices = async( id:number) => {
    //pedir para o repositorio
    const data = await playerRepository.findPlayerById(id);
    let response = null;

    if(data){
        response = HttpResponse.ok(data);
    }else{
        response = HttpResponse.noContent();
    }
    return response;
};