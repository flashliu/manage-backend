import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import User from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '47.107.65.172',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'mana',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule { }
