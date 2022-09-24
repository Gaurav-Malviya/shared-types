import {User} from "../user";

export type channel =
{
    id         ?: string;
    type       ?: "private"|"group";
    user        : User[];
    createdOn  ?: Date;
    muteChannel : duration; //mute Channel which will accept number from enum (duration)
    inviteLink  : string; //Channel invite link
}

export enum duration
{
    fifteenMinute = 15,
    oneHour       = 1,
    threeHour     = 3,
    eightHour     = 8,
    twentyFourHour= 24,
    manualTurnOn  = 0,
    manualTurnOff = 1
}
