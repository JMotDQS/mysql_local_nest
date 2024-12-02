import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Users/user.model';
import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3369,
      username: 'root',
      password: 'L0rdOfL1ghtn!ng',
      database: 'kms_v2_mysql',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
