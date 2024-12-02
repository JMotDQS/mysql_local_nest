import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
	@Column
	pk_id: string;

	@Column
	created_date: string;

	@Column
	emp_id: string;

	@Column
	first_name: string;

	@Column
	last_name: string;

	@Column
	middle_initial: string;
}