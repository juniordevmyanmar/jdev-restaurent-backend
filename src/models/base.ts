import { Model } from "sequelize"

export abstract class BaseModel<TModelAttributes extends {} = any, TCreationAttributes extends {} = TModelAttributes> extends Model {
    // timestamps!
    public readonly createdAt!: Date
    public readonly updatedAt!: Date
    public readonly deletedAt!: Date
}

