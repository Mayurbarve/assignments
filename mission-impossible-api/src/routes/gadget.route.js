import express from 'express';
import * as gadgetController from '../controllers/gadget.controller.js';

const router = express.Router();

router.get('/', gadgetController.getAllGadgets);
router.post('/', gadgetController.createGadget);
router.patch('/:id', gadgetController.updateGadget);
router.delete('/:id', gadgetController.decommissionGadget);
router.post('/:id/self-destruct', gadgetController.selfDestruct);

export default router;
