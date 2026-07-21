# Exoplanet Habitability App
## Deployed site: https://exoplanet-habitability.netlify.app/





## Security note: npm audit

`npm audit` currently reports 3 moderate vulnerabilities through a transitive dependency path:
`prisma` -> `@prisma/dev` -> `@hono/node-server`.

Automatic remediation requires `npm audit fix --force`, which downgrades Prisma to `6.19.3` and conflicts with this project's pinned Prisma `7.8.0` setup.

For now, this is intentionally not force-fixed. Re-check with `npm audit` after future Prisma dependency updates.
