import { IsNotEmpty, MinLength, MaxLength, Matches, IsString } from "class-validator";
import { StringDecoder } from "string_decoder";

export class CreateEventDto {
    @IsNotEmpty()
    title: string
    start: string
    end: string
    color:string
    actors:[string]
    techs:[string]

}