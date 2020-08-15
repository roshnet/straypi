import { Router } from 'express'

const router = Router()

router.get('/', (req, resp) => {
  const answer = Math.random() > 0.5 ? 'yes' : 'no'

  resp.send({
    answer,
    randomValue: Math.random()
  })
})

export default router
