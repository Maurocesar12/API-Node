import * as playerRepostory from "../repositories/player-repository";
import { noContent, ok } from "../utils/http-help";

export const getPlayerService = async () => {
    const data = await playerRepostory.findAllPlayers();
    let response = null;

    if(data){
        response = await ok(data);
    }else {
        response = await noContent(data);
    }

    return response;
};
