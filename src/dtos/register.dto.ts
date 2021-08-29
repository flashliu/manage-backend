import { PickType } from "@nestjs/swagger"
import User from "src/entities/user.entity"

export default class RegisterDto extends PickType(User, ['username', 'password'] as const) { }