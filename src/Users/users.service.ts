import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";

@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User)
		private userModel: typeof User,
	) {}

	async findAll(): Promise<User[]> {
		return this.userModel.findAll();
	}

	findOne(pk_id: string): Promise<User> {
		return this.userModel.findOne({
			where: {
				pk_id,
			},
		});
	}

	async remove(pk_id: string): Promise<void> {
		const user = await this.findOne(pk_id);
		await user.destroy();
	}
}