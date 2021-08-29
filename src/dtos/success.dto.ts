import { ApiProperty } from "@nestjs/swagger"

export default class SuccessDto<T> {
  @ApiProperty()
  message: string

  @ApiProperty({ default: 1 })
  code: number

  @ApiProperty()
  data: T
}