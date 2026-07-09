import "dotenv/config";
import { pathToFileURL } from "node:url";
import express from "express";
import cors from 'cors';
import { defaultPlanetInclude, formatPlanet } from "./api/planets.js";
import prisma from "./lib/prisma.js";

export const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

const PORT = 3000;

function isMainModule(): boolean {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return false;
  }
}

app.get("/", (_req, res) => {
  console.log("Hit the root route!");
  res.send("Server is running");
});

app.get("/api/planets", async (_req, res) => {
  try {
    const planets = await prisma.planet.findMany({
      take: 5,
      include: defaultPlanetInclude,
    });

    if (planets.length === 0) {
      return res.status(200).json({
        message:
          "Connection successful, but database is empty. Please run seed script.",
      });
    }

    return res.status(200).json({
      message: "Connection successful",
      count: planets.length,
      planets: planets.map(formatPlanet),
    });
  } catch (error) {
    console.error("Failed to fetch planets:", error);
    return res.status(500).json({
      message: "Database connection failed",
    });
  }
});

if (isMainModule()) {
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is strictly listening on 0.0.0.0:${PORT}`);
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `Port ${PORT} is already in use. Check for ghost processes!`,
      );
    } else {
      console.error("SERVER ERROR:", err);
    }
  });
}
