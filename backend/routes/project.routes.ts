import express from 'express';
import {
    createProject,
    deleteProject,
    getProject,
    getProjects,
    updateProject
} from '../controllers/project.controller';

export default (router: express.Router) => {
    router.get('/api/projects', getProjects).post('/api/projects', createProject);

    router
        .get('/api/projects/:id', getProject)
        .put('/api/projects/:id', updateProject)
        .delete('/api/projects/:id', deleteProject);
};
