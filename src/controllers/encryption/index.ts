import { Router } from 'express'
import { encrypt, decrypt } from './utils'

const router = Router()

router.get('/random-token', (req, resp) => {
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  resp.send({
    token
  })
})

router.get('/encrypt-text', (req, resp) => {
  if (!req.body.text) {
    // [TODO] Create types i/of checking individual fields, or add middleware
    resp.sendStatus(400)
    return
  }
  const encrypted = encrypt(req.body.text)
  resp.send(encrypted)
})

router.get('/decrypt-text', (req, resp) => {
  const decrypted = decrypt(req.body.text, req.body.iv)
  resp.send(decrypted)
})

export default router
