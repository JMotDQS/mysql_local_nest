import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('users')
export class UsersController {
	@Get()
	findAll(): string {
		return 'This returns all users';
	}

	@Get(':pk_id')
	findOne(@Param('pk_id') pk_id: string): string {
		return 'This returns a specific user based on #${pk_id}';
	}

	@Post()
	create(@Body() createUserDto: any): string {
		return 'Adds a new user.';
	}
}