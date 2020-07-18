import PromiseRouter from 'express-promise-router';
import { audioController } from '../controllers';

const router = PromiseRouter();

router.get('/', audioController.getAll);

router.get('/:audioId', audioController.getAudio);

router.post('/', audioController.createAudio);

router.put('/:audioId', audioController.updateAudio);

router.delete('/:audioId', audioController.deleteAudio);

export default router;
