import { IsString, IsInt, IsNotEmpty } from "class-validator";

export class CreateLotDto {
	@IsString()
	@IsNotEmpty()
	created_date: string;

	@IsString()
	@IsNotEmpty()
	lot_name: string;

	@IsString()
	@IsNotEmpty()
	lot_address: string;

	@IsString()
	@IsNotEmpty()
	lot_city: string;

	@IsString()
	@IsNotEmpty()
	fk_g_states_pk_id: string;

	@IsString()
	@IsNotEmpty()
	lot_zip: string;

	@IsInt()
	@IsNotEmpty()
	lot_capacity: number;

	@IsString()
	@IsNotEmpty()
	lot_active: string;

	@IsString()
	@IsNotEmpty()
	fk_manufacturers_pk_id: string
}