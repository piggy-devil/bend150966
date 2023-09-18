import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }
);

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
