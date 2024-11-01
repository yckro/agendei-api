import bcrypt from "bcrypt";
import repoUser from "../repositories/repository.user.js";


async function Inserir(name, email, password) {

    const hashPassword = await bcrypt.hash(password, 10);
    const   user = await repoUser.Inserir(name, email, hashPassword);

    user.token = "token";

    return user;
}

async function Login(email, password) {
    const user = await repoUser.ListarByEmail( email);

    if (user.length == 0)
        return [];
    else
        if (await bcrypt.compare(password, user.password)) {
            delete user.password;

            user.token = "token";
            return user;
        } else
            return [];
}

export default { Inserir, Login };