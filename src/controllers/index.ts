import { Router } from 'express'
import init from './init'
import yesno from './yesno'

const router = Router()

router.get('/', (req, resp) => {
  resp.send('Server up!')
})

router.use('/yesno', yesno)

export default router
