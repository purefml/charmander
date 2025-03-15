import express, { Router } from 'express';
import { createReferral, getAllReferrals, updateReferral, deleteReferral, getReferral } from '../controller/referralsController';

/* Base Route: /api/referrals */
const router: Router = express.Router();

// CREATE Referral
router.post('/', createReferral)
// GET ALL Referrals
router.get('/', getAllReferrals);
// GET Referral
router.get('/:id', getReferral);
// UPDATE Referral
router.put('/:id', updateReferral);

// DELETE Referral
router.delete('/:id', deleteReferral);

export default router;
