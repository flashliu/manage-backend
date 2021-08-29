import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger';
import LoginDto from 'src/dtos/login.dto';
import RegisterDto from 'src/dtos/register.dto';
import SuccessDto from 'src/dtos/success.dto';
import User from 'src/entities/user.entity';
import { ApiSuccessRsponse } from 'src/utils/utils';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
@ApiExtraModels(SuccessDto, User)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({
    summary: "用户登录",
  })
  @Post('login')
  login(@Body() data: LoginDto) {
    return this.userService.login(data)
  }

  @ApiOperation({
    summary: '用户注册'
  })
  @Post('register')
  register(@Body() data: RegisterDto) {
    return this.userService.register(data)
  }

  @ApiOperation({
    summary: '查询所有用户'
  })
  @Get('getUsers')
  @ApiSuccessRsponse(User)
  getUser() {
    return this.userService.getUsers()
  }
}
