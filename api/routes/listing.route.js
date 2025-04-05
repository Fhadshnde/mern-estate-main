import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// ✅ تأمين جميع العمليات التي تتطلب مصادقة المستخدم
router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.put('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing); // هذه يمكن أن تكون عامة
router.get('/get', getListings); // عرض كل القوائم

export default router;
