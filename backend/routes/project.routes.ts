import express from "express";

export default (router: express.Router) => {
  router.get("/api/projects", (req, res) => {
    res.json({ message: "Get All Project" });
  });

  router.post("/api/projects", (req, res) => {
    res.json({ message: "Create Project" });
  });

  router.get("/api/projects/:id", (req, res) => {
    res.json({ message: `Get Project ${req.params.id}` });
  });

  router.put("/api/projects/:id", (req, res) => {
    res.json({ message: `Update Project ${req.params.id}` });
  });

  router.delete("/api/projects/:id", (req, res) => {
    res.json({ message: `Delete Project ${req.params.id}` });
  });
};
