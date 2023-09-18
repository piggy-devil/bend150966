import { checkIsValidObjectId } from '../database/db';
import ProjectModel from '../models/project.model';
import { sanitizeProject } from '../sanitizers/project.sanitizer';
import { IProjectSchema } from '../schema/project.schema';
import { ProjectType } from '../types/project.types';

export async function getProjects(): Promise<ProjectType[]> {
    try {
        const projects = await ProjectModel.find();
        if (!projects) throw new Error('Projects not found');

        return projects;
    } catch (err) {
        throw new Error('Error getting projects');
    }
}

export async function createProject(project: ProjectType): Promise<ProjectType> {
    const sanitizedProject = sanitizeProject(project);

    try {
        const newProject = await ProjectModel.create(sanitizedProject);
        if (!newProject) throw new Error('Project not created');

        return newProject;
    } catch (err) {
        throw new Error('Error creating project');
    }
}

export async function getProjectById(projectId: string): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);
    try {
        const project = await ProjectModel.findById(projectId);
        if (!project) throw new Error('Project not found');

        return project;
    } catch (err) {
        throw new Error('Error finding project');
    }
}

export async function updateProject(
    projectId: string,
    project: ProjectType
): Promise<IProjectSchema> {
    checkIsValidObjectId(projectId);

    const sanitizedProject = sanitizeProject(project);

    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, sanitizedProject, {
            new: true
        });
        if (!updatedProject) throw new Error('Project not found');

        return updatedProject;
    } catch (err) {
        throw new Error('Error updating project');
    }
}

export async function deleteProject(projectId: string): Promise<void> {
    checkIsValidObjectId(projectId);

    try {
        const project = await ProjectModel.findByIdAndDelete(projectId);
        if (!project) throw new Error('Project not found');

        return;
    } catch (err) {
        throw new Error('Error deleting project');
    }
}
