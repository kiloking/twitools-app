import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  // 使用虚拟字段来表示User和Product之间的关系
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

const User = models?.User || model("User", UserSchema);

export default User;