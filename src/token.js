import jwt from "jsonwebtoken";

const secretToken = "secret";

function CreateToken(id_user) {

    const token = jwt.sign({ id_user }, secretToken, { expiresIn: 999999 });

    return token;
}

function validateToken(req, res, next) {
    const authToken = req.headers.authorization;
    if (!authToken) 
        return res.status(401).json({ error: "Token não informado" });

    const [bearer, token] = authToken.split(" ");

    jwt.verify(token, secretToken, (err, tokenDecoded) => {
        if (err) 
            return res.status(401).json({ error: "Token inválido" });

        req.id_user = tokenDecoded.id_user;
        next();
});
}



export default { CreateToken, validateToken };