import { Schema, model } from "mongoose";

interface IUser {
    nome: string;
    email: string;
    senha: string;
    nivel: string;
}

const userSchema = new Schema<IUser>({
    nome: {type: String, reqired: true},
    email: {type: String, reqired: true},
    senha: {type: String, reqired: true},
    nivel: {type: String, reqired: true, default: "USER"},
},
{
    timestamps: true,
});

const User = model<IUser>("User", userSchema);

export default User;