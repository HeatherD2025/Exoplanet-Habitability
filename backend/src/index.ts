import "dotenv/config";
import { pathToFileURL } from "node:url";
import express from "express";
import cors from "cors";
import { defaultPlanetInclude, formatPlanet } from "./api/planets.js";
import prisma from "./lib/prisma.js";

export const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

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

app.get("/api/planets", async (_req, res) => {
  try {

    const skip = parseInt(_req.query.skip as string) || 0;
    const take = parseInt(_req.query.take as string) || 200;

    const planets = await prisma.planet.findMany({
      skip: skip,
      take: take,
      include: defaultPlanetInclude,
      orderBy: {id: 'asc'}
    });

    if (planets.length === 0) {
      // Return empty array so frontend still receives a valid array structure
      return res.status(200).json([]);
    }

    // Return array directly so Array.isArray() evaluates to true on the frontend
    return res.status(200).json(planets.map(formatPlanet));
    
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
