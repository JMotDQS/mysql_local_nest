import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3369,
      username: 'root',
      password: 'L0rdOfL1ghtn!ng',
      database: 'kms_v2_mysql',
      models: []
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
