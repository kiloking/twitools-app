import mongoose,{ Document, Schema, model, models } from "mongoose";

interface IProduct extends Document {
  name: string;
  description?: string;
  type: string;
  condition: string;
  price: mongoose.Types.Decimal128;
  transactionMethod: string;
  transactionLocation: string;
  userId: mongoose.Types.ObjectId;
}
// 定义ProductType枚举
const ProductType = [
  'StreamingEncoder',
  'BackpackStrap',
  'TripodMountColdShoe',
  'Clamp',
  'Camera',
  'Other',
  'Smartphone',
  'CableAdapter',
  'MicrophoneSpeaker',
  'Lighting',
  'Modem',
  'Cage',
  'Stabilizer',
];

// 定义Condition枚举
const Condition = ['New', 'Used'];

// 定义Product模型
const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: String,
  type: { type: String, required: true, enum: ProductType },
  condition: { type: String, required: true, enum: Condition },
  price: { type: Schema.Types.Decimal128, required: true },
  transactionMethod: { type: String, required: true },
  transactionLocation: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

// 使用 models 来避免重复定义模型
const Product = models.Product || model<IProduct>('Product', ProductSchema);

export default Product;