import express,{Request,Response} from "express";
import cors from "cors";
import router from "../routes/userRoutes";


const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.get("/", (req:Request, res:Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});