import { playerModel } from "../models/player-model";

const dataBase: playerModel[] = [
    {id: 1, name:"Neymar"},
    {id: 2, name:"Messi"},
];

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return dataBase;
}

export const findPlayerById = async (id: number): Promise<playerModel | undefined> =>{
    return dataBase.find((player) => player.id === id);
};