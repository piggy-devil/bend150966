import express from 'express';
import {
    createProjectHandler,
    deleteProjectHandler,
    getProjectHandler,
    getProjectsHandler,
    updateProjectHandler
} from '../controllers/project.controller';

export default (router: express.Router) => {
    router.get('/api/projects', getProjectsHandler).post('/api/projects', createProjectHandler);

    router
        .get('/api/projects/:id', getProjectHandler)
        .put('/api/projects/:id', updateProjectHandler)
        .delete('/api/projects/:id', deleteProjectHandler);
};
