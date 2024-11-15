import express, { Application, Request, Response } from "express";
import cors from "cors";
import { createServer } from "http";
import Routes from "./routes/index.js";

const app: Application = express();
const PORT = process.env.PORT || 8080;

const server = createServer(app);

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working Guys 🙌");
});
app.use("/api", Routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
