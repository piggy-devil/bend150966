import { model } from 'mongoose';
import projectSchema, { IProjectSchema } from '../schema/project.schema';

const ProjectModel = model<IProjectSchema>('Project', projectSchema);

export default ProjectModel;
