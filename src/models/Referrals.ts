import mongoose from "mongoose";

/**
 * This module utilizes Mongoose's built-in validations for simplicity.
 * 
 * - Additional strict validations and edge case handling can be implemented as needed.
 * - Only basic CRUD operations are included in this implementation.
 * 
 * Consider additional logics for:
 * - Custom validation rules
 * - Improved error handling
 * - Aggregations
 * - Relational Datas
 * 
 * Mongoose Documentation: @https://mongoosejs.com/docs/api/mongoose.html
 * 
 * @Ruben
 */


const ReferralSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Invalid email format"],
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        validate: {
            validator: function (v: string) {
                return /^\d{11}$/.test(v); // Must be 11 digits
            },
            message: "Invalid phone number",
        },
    },
    state: {
        type: String,
        required: [true, "State is required"],
    },
    postal: {
        type: String,
        required: [true, "Postal is required"],
    },
    suburb: {
        type: String,
        required: [true, "Suburb is required"],
    },
    country: {
        type: String,
        required: [true, "Country is required"],
    },
    avatar: {
        type: String,
        default: "https://example.com/default-avatar.jpg",
    },
}, { timestamps: true });

export default mongoose.model("Referrals", ReferralSchema, 'referrals');