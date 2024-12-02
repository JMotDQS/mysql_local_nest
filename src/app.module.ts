import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { User } from './Users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3369,
      username: 'root',
      password: 'L0rdOfL1ghtn!ng',
      database: 'kms_v2_mysql',
      models: [User]
    }),
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
