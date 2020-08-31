import { IsNotEmpty, MinLength, MaxLength, Matches, IsString } from "class-validator";

export class UserCreateDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(4, {message: "To shor!"})
    @MaxLength(20)
    email: string

    @MinLength(4)
    @MaxLength(20)
    @IsNotEmpty()
    password: string
}