import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  isRecorded: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
TodoSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema); 
//possibleable a new server everytime