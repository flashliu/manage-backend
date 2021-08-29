import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import LoginDto from 'src/dtos/login.dto';
import RegisterDto from 'src/dtos/register.dto';
import User from 'src/entities/user.entity';
import { success } from 'src/utils/utils';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async login({ username, password }: LoginDto) {
    const user = await this.userRepository.findOne({
      username,
      password
    })
    if (!user) {
      throw new BadRequestException('用户不存在或密码错误')
    }
    return success('登录成功', user)
  }

  async register({ username, password }: RegisterDto) {
    const user = await this.userRepository.findOne({ username })
    if (user) {
      throw new BadRequestException('该用户已经存在')
    }
    await this.userRepository.save({ username, password })
    return success('注册成功', user)
  }

  async getUsers() {
    const res = await this.userRepository.find()
    return success('查询成功', res)
  }
}
