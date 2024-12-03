import { AllowNull, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
	@Column
	@PrimaryKey
	pk_id: string;

	@Column(DataType.DATE)
	created_date: Date;

	@Column
	@AllowNull(false)
	emp_id: string;

	@Column
	@AllowNull(false)
	first_name: string;

	@Column
	@AllowNull(false)
	last_name: string;

	@Column
	@AllowNull(true)
	middle_initial: string;
}