import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from user service");
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// server
const PORT: number = 3000;

app.listen(PORT, (): void => {
  console.log(`Yo Server running on http://localhost:${PORT}`);
});
