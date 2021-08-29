import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import User from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'glass',
      password: '123456',
      database: 'mana',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
  ],
})
export class AppModule { }
