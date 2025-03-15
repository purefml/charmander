import { Request, Response, NextFunction } from 'express';
import Referrals from '../models/Referrals';

/**
 * Consider extending logic for:
 * - Enhanced data integrity checks
 * - Bulk data operations
 * - Complex Data Operations. i.e: No Duplicate Entries etc.
 * - Improved error handling
 * - Authentications etc. 
 * 
 * - @Ruben
 */

interface IReferral {
    name: string;
    email: string;
    phone: string;
    state: string;
    postal: string;
    suburb: string;
    country: string;
    avatar: string;
}

export const createReferral = async (req: Request<{}, {}, IReferral>, res: Response, next: NextFunction): Promise<void>  => {
  try {
        const newReferral = new Referrals(req.body);
        const savedReferral = await newReferral.save();
        res.status(201).json({
            success: true,
            message: 'Successfully Added',
            data: savedReferral,
        });
    } catch (error) {
        next(error);
    }
}

export const getAllReferrals = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
     try {
            const referrals = await Referrals.find();
            res.status(200).json(referrals);
        } catch (error) {
            next(error);
        }
}

export const getReferral = async (req: Request, res: Response, next: NextFunction): Promise<void> => { 
    try {
        const referral = await Referrals.findById(req.params.id);

        if (!referral) {
            res.status(404).json({ success: false, message: 'Referral not found' });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Successfully Updated',
            data: referral,
        });
    } catch (error) {
        next(error);
    }
}

export const updateReferral = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
            const updatedReferral = await Referrals.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true, runValidators: true } // return updated and ensure datas are updated.
            );
    
            if (!updatedReferral) {
                res.status(404).json({ success: false, message: 'Referral not found' });
                return;
            }
    
            res.status(200).json({
                success: true,
                message: 'Successfully Updated',
                data: updatedReferral,
            });
        } catch (error) {
            next(error);
        }
}

export const deleteReferral = async (req: Request, res: Response, next: NextFunction): Promise<void> => {  
     try {
            const removedReferral = await Referrals.findByIdAndDelete(req.params.id);
    
            if (!removedReferral) {
                res.status(404).json({ success: false, message: 'Referral not found' });
                return;
            }
    
            res.status(200).json({
                success: true,
                message: 'Successfully Deleted',
                data: removedReferral,
            });
        } catch (error) {
            next(error);
        }
}
