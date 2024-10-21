import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('lots')
export class LotsController {
	/*
		GET /lots
		GET /lots/:pk_id
		POST /lots
		PATCH/PUT /lots/:pk_id
		DELETE /lots/:pk_id
	*/
	@Get() // /lots
	findAll() {
		return [];
	}

	@Get('open') // /lots/open
	findOpen() {
		return [];
	}

	@Get(':pk_id') // /lots/:pk_id
	findOne(@Param('pk_id') pk_id: string) {
		return { pk_id };
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
