import express from "express";
import cors from "cors";
import { router as blockchainRouter } from "./routes/blockchain-routes.mjs";
import { router as memberRouter } from "./routes/member-routes.mjs";
import dotenv from "dotenv";
import errorHandler from "./utils/error-handler.mjs";
import ErrorResponse from "./models/ErrorResponseModel.mjs";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
global.__appdir = dirname;

const PORT = process.argv[2];

app.use(cors());
app.use(express.json());

app.use("/api/v1/blockchain", blockchainRouter);
app.use("/api/v1/members", memberRouter);

app.all("*", (req, res, next) => {
  next(new ErrorResponse(`Kunde inte hitta resursen ${req.originalUrl}`, 404));
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
