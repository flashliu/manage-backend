import { ApiProperty, ApiResponse } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
  @ApiProperty({ description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @ApiProperty({ description: "用户名" })
  @IsNotEmpty({ message: "用户名不能为空" })
  @Column({ length: 20 })
  username: string

  @ApiProperty({ description: "密码" })
  @IsNotEmpty({ message: "密码不能为空" })
  @Column({ length: 20 })
  password: string

  @ApiProperty({ description: "创建时间" })
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createTime: string
}