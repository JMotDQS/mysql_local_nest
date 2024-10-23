import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { LotsService } from './lots.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';

@Controller('lots')
export class LotsController {
	constructor(private readonly lotsService: LotsService) {};
	/*
		GET /lots
		GET /lots/:pk_id
		POST /lots
		PATCH/PUT /lots/:pk_id
		DELETE /lots/:pk_id
	*/
	@Get() // /lots
	findAll() {
		//return [];
		return this.lotsService.findAll();
	}

	@Get('open') // /lots/open
	findOpen() {
		return [];
	}

	@Get(':pk_id') // /lots/:pk_id
	findOne(@Param('pk_id') pk_id: string) {
		//return { pk_id };
		return this.lotsService.findOne(pk_id);
	}

	@Post() // /lots
	create(@Body(ValidationPipe) lot: CreateLotDto) {
		//return lot
		return this.lotsService.create(lot);
	}

	@Patch(':pk_id') // /lots/:pk_id
	update(@Param('pk_id') pk_id: string, @Body(ValidationPipe) lotUpdate: UpdateLotDto) {
		//return { pk_id, ...lotUpdate };
		return this.lotsService.update(pk_id, lotUpdate);
	}

	@Delete(':pk_id') // /lots/:pk_id
	delete(@Param('pk_id') pk_id: string) {
		//return { pk_id };
		return this.lotsService.delete(pk_id);
	}
}
