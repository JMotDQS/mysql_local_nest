import { Module } from '@nestjs/common';
import { LotsController } from './lots.controller';
import { LotsService } from './lots.service';

@Module({
	controllers: [LotsController],
	providers: [LotsService]
})
export class LotsModule {}
