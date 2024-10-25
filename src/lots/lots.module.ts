import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { g_lots } from './lots.model';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';

@Module({
	imports: [SequelizeModule.forFeature([g_lots])],
	controllers: [LotsController],
	providers: [LotsService]
})
export class LotsModule {}
