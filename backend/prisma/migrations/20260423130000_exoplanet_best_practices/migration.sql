-- Create enum for trait mass provenance.
CREATE TYPE "MassType" AS ENUM ('MEASURED', 'CALCULATED', 'UNKNOWN');

CREATE TABLE "Planet" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "discoveryYear" INTEGER,
    "hostStarName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Planet_name_key" UNIQUE ("name"),
    CONSTRAINT "planet_discovery_year_range_chk" CHECK ("discoveryYear" IS NULL OR ("discoveryYear" >= 1600 AND "discoveryYear" <= 2100))
);

CREATE TABLE "PlanetaryTrait" (
    "id" TEXT NOT NULL,
    "planetId" TEXT NOT NULL,
    "planetaryMass" DECIMAL(12,6),
    "planetaryRadius" DECIMAL(12,6),
    "massType" "MassType" NOT NULL DEFAULT 'UNKNOWN',
    "stellarFlux" DECIMAL(12,6),
    "orbitalDistance" DECIMAL(12,6),
    "isDefault" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanetaryTrait_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "planetary_trait_mass_positive_chk" CHECK ("planetaryMass" IS NULL OR "planetaryMass" > 0),
    CONSTRAINT "planetary_trait_radius_positive_chk" CHECK ("planetaryRadius" IS NULL OR "planetaryRadius" > 0),
    CONSTRAINT "planetary_trait_flux_positive_chk" CHECK ("stellarFlux" IS NULL OR "stellarFlux" > 0),
    CONSTRAINT "planetary_trait_orbital_distance_positive_chk" CHECK ("orbitalDistance" IS NULL OR "orbitalDistance" > 0)
);

CREATE INDEX "Planet_hostStarName_idx" ON "Planet" ("hostStarName");
CREATE INDEX "Planet_discoveryYear_idx" ON "Planet" ("discoveryYear");
CREATE INDEX "PlanetaryTrait_planetId_idx" ON "PlanetaryTrait" ("planetId");
CREATE INDEX "PlanetaryTrait_planetId_isDefault_idx" ON "PlanetaryTrait" ("planetId", "isDefault");

-- One default trait profile per planet.
CREATE UNIQUE INDEX "PlanetaryTrait_default_per_planet_unique"
    ON "PlanetaryTrait" ("planetId")
    WHERE "isDefault" = true;

ALTER TABLE "PlanetaryTrait"
    ADD CONSTRAINT "PlanetaryTrait_planetId_fkey"
    FOREIGN KEY ("planetId")
    REFERENCES "Planet" ("id")
    ON DELETE CASCADE
    ON UPDATE CASCADE;
