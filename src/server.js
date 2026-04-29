import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import auditRoutes from './routes/auditRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/audits", auditRoutes);

app.get("/", (req, res) => {
  res.send("ProcessInsight API is running.");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
