import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

@Table
export class g_lots extends Model {
	@Column({
		primaryKey: true,
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
		unique: true,
		allowNull: false
	})
	pk_id: string;
	
	@Column({
		type: DataType.DATE,
		allowNull: false
	})
	created_date: string;
	
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	lot_name: string;
	
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	lot_address: string;
	
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	lot_city: string;
	
	@ForeignKey(() => g_states)
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	fk_g_states_pk_id: string;
	
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	lot_zip: string;
	
	@Column({
		type: DataType.SMALLINT,
		allowNull: false
	})
	lot_capacity: string;
	
	@Column({
		allowNull: false,
		defaultValue: 1
	})
	lot_active:	Boolean;
	
	@ForeignKey(() => manufacturers)
	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	fk_manufacturers_pk_id: string;
}