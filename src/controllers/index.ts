import { Router } from 'express'
import encryption from './encryption'
import yesno from './yesno'

const router = Router()

router.get('/', (req, resp) => {
  resp.send('Server up!')
})

router.use('/yesno', yesno)
router.use('/crypt', encryption)

export default router
