import crypto from "crypto"
import dotenv from "dotenv"

dotenv.config()

interface IEncryptionResponse {
  cipher: string
  iv?: string
}

const ALGORITHM = process.env.ENCRYPTION_ALGO
const PLAIN_KEY = String(process.env.ENCRYPTION_KEY).slice(0, 32)
const SALT = process.env.DEFAULT_SALT
const KEY = crypto.scryptSync(PLAIN_KEY, SALT, 16)

export const encrypt = (message: string): IEncryptionResponse => {
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv)
  const encrypted = cipher.update(message, "utf8", "hex") + cipher.final("hex")
  return {
    cipher: encrypted,
    iv: iv.toString('hex')
  }
}

export const decrypt = (message: string, iv: string): IEncryptionResponse => {
  let ivBuffer = Buffer.from(iv, 'hex')
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, ivBuffer)
  const decrypted =
    decipher.update(message, "hex", "utf8") + decipher.final("utf8")
  return { cipher: decrypted }
}
