import express from "express";

const app = express();
const port = 8080;

app.get("/", (_req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
