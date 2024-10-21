import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { LotsService } from './lots.service';

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
	create(@Body() lot: {}) {
		return lot
	}

	@Patch(':pk_id') // /lots/:pk_id
	update(@Param('pk_id') pk_id: string, @Body() lotUpdate: {}) {
		return { pk_id, ...lotUpdate };
	}

	@Delete(':pk_id') // /lots/:pk_id
	delete(@Param('pk_id') pk_id: string) {
		return { pk_id };
	}
}
