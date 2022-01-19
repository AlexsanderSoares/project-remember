import Realm from "realm";
import PasswordSchema from "../schemas/PasswordSchema";

export default new Realm({ schema: [PasswordSchema]});
