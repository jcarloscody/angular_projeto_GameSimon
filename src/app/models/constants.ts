export enum CORES {
    red,
    green,
    yellow,
    blue
}
export const INICIO_CONTAGEM = 2;

export const dormir = async (time: number) => {
   return new Promise (resolve => setTimeout(resolve, time));
}