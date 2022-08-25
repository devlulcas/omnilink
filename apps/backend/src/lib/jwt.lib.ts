import { SignOptions, sign, VerifyOptions, verify } from "jsonwebtoken";
import { readFileSync } from "node:fs";
import { join } from "node:path";

interface TokenPayload {
  id: number;
  name: string;
}

/**
 * Gera um token JWT assinado
 *
 * @param payload Objeto com informações de payload para usar depois
 * @returns Token assinado
 */
export function generateToken(payload: TokenPayload) {
  const privateKeyPath = join(__dirname, "../../../jwt.key");
  const privateKey = readFileSync(privateKeyPath);
  const expiresIn = process.env.JWT_EXPIRATION || "1h";

  const signOptions: SignOptions = {
    algorithm: "RS256",
    expiresIn,
  };

  return sign(payload, privateKey, signOptions);
}

/**
 * Válida o token e retorna o objeto de payload. Caso o token seja inválido uma exceção será lançada
 *
 * @param token String do token JWT assinado
 * @returns Uma promise contendo o payload que estava guardado no token
 */
export function validateToken(token: string): Promise<TokenPayload> {
  const publicKeyPath = join(__dirname, "../../../jwt.key.pub");
  const publicKey = readFileSync(publicKeyPath);

  const verifyOptions: VerifyOptions = {
    algorithms: ["RS256"],
  };

  return new Promise((resolve, reject) => {
    verify(token, publicKey, verifyOptions, (error, decoded) => {
      if (error) return reject(error);

      const data = decoded as TokenPayload;

      resolve(data);
    });
  });
}
