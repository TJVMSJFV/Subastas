import mongoose from "mongoose";

const collectorSchema = new mongoose.Schema({
  docId: {
    type: Number,
    required: true,
    unique: true,
  },
  fName: {
    type: String,
    required: true,
  },
  mName: {
    type: String,
    required: false,
  },
  fLastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  // TODO: Agregar la parte de la cuenta
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Collector ||
  mongoose.model("Collector", collectorSchema);
