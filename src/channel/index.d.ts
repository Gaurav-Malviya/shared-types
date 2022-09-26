import {User} from "../user";

export type channel =
{
    id         ?: string;
    type       ?: "private"|"group";
    user        : User[];
    createdOn  ?: Date;
    muteChannel : duration; //mute Channel which will accept number from enum (duration)
    inviteLink  : string;  //Channel invite link
}

export enum duration
{
    // fifteenMinute = 15,
    // oneHour       = 10,
    // threeHour     = 30,
    // eightHour     = 80,
    // twentyFourHour= 240,
    // manualTurnOn  = 1,
    // manualTurnOff = 0

    fifteenMinute = 0.25,
    oneHour       = 60,
    threeHour     = 180,
    eightHour     = 480,
    twentyFourHour= 1440,
    manualTurnOn  = 1,
    manualTurnOff = 0
}
