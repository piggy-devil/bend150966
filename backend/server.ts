import express from "express";
import { PORT } from "./utils/config";
import projectRoutes from "./routes/project.routes";
import router from "./routes";

const app = express();

app.use(express.json());

app.use("/", router());

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
