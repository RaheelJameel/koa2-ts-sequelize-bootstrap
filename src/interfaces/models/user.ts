import { Model } from "sequelize";
import { ModelStaticInstance } from "./index";
import { User } from "../user";

export interface UserModel extends Model, User { }

// Need to declare the static model so `findOne` etc. use correct types.
export type UserModelStatic = ModelStaticInstance<UserModel>;
