import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotsModule } from './lots/lots.module';
import { g_lots } from './lots/lots.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3369,
      username: 'root',
      password: 'L0rdOfL1ghtn!ng',
      database: 'kms_v2_mysql',
      models: [g_lots]
    }),
    LotsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
