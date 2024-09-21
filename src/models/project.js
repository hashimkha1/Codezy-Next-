import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters'],
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
      },
      imageUrl: {
        type: String,
        required: [true, 'Image URL is required'],
      },
      link: {
        type: String,
        required: [true, 'Link is required'],
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

export default mongoose.models.Project || mongoose.model('Project', projectSchema);