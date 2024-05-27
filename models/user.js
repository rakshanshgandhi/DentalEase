import mongoose, { Schema, models } from "mongoose";

const googleUser = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.GoogleUser || mongoose.model('GoogleUser',googleUser);

export default User;