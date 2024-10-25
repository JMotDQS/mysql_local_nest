import { Injectable } from '@nestjs/common';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { NotFoundException } from '@nestjs/common';
import { g_lots } from './lots.model';

@Injectable()
export class LotsService {
	private lots = [
		{
			"pk_id" : "641a387e-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "AAA South",
			"lot_address" : "1 Auto Club Drive",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8a65-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Wyoming",
			"lot_address" : "777 Bowles",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 3350,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8bd3-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Wyoming 2",
			"lot_address" : "6201 Wyoming St",
			"lot_city" : "Dearborn",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48126",
			"lot_capacity" : 0,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		},
		{
			"pk_id" : "641a8d2e-8fbb-11ef-b10e-7c8ae1b7761b",
			"created_date" : "2024-10-21 10:47:27",
			"lot_name" : "Ypsilanti",
			"lot_address" : "188 Spring St",
			"lot_city" : "Ypsilanti",
			"fk_g_states_pk_id" : "fc8a3465-8d80-11ef-b10e-7c8ae1b7761b",
			"lot_zip" : "48197",
			"lot_capacity" : 1500,
			"lot_active" : "0",
			"fk_manufacturers_pk_id" : "585d9e0e-8fbb-11ef-b10e-7c8ae1b7761b"
		}
	]

	findAll() {
		return this.lots;
	}

	findOne(pk_id: string) {
		const lot = this.lots.find(lot => lot.pk_id === pk_id);
		if(!lot) {
			throw new NotFoundException('User not found...');
		}
		return lot;
	}

	create(lot: CreateLotDto) {
		const lotNewId = '641e1b7761b-' + Math.random();
		const newLot = {
			pk_id: lotNewId,
			...lot
		}
		this.lots.push(newLot);
		return newLot;
	}

	update(pk_id: string, updatedLot: UpdateLotDto) {
		this.lots = this.lots.map(lot => {
			if(lot.pk_id === pk_id) {
				return { ...lot, ...updatedLot };
			}
			return lot;
		})
		return this.findOne(pk_id);
	}

	delete(pk_id: string) {
		const removedLot = this.findOne(pk_id);
		this.lots = this.lots.filter(lot => lot.pk_id !== pk_id);
		return removedLot;
	}
}