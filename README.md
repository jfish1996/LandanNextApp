# Landan Next App

Next.js storefront/portfolio client for the Landan Strapi API.

## Getting Started

Use npm for this repo:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If Next 12 serves a blank page during local development, clear the dev cache and restart:

```bash
rm -rf .next
npm run dev
```

## Environment

The frontend now talks to Strapi REST, not GraphQL.

```bash
NEXT_PUBLIC_BACK_END_URL=http://localhost:1337/api
```

For deployed environments, update `NEXT_PUBLIC_BACK_END_URL` from the old `/graphql` URL to the Strapi API base URL, for example:

```bash
NEXT_PUBLIC_BACK_END_URL=https://<strapi-host>/api
```

The REST client also strips a trailing `/graphql` for local backwards compatibility, but production should be configured to `/api` explicitly.

Server-side Stripe code should use `STRIPE_SECRET_KEY`; do not expose secret keys through `NEXT_PUBLIC_*` in production.

## Strapi 5 REST Migration Notes

The client no longer uses `urql`, `next-urql`, GraphQL queries, or GraphQL mutations.

Main changes:

- `lib/strapiRest.js` contains the shared REST helpers and normalizes Strapi 5 flattened responses into the existing internal `attributes` shape.
- `lib/returnData.js` maps the old GraphQL data helpers to REST endpoints with Strapi 5 `populate`, `filters`, `pagination`, and `documentId` behavior.
- Category and section requests use different populate params. Categories can populate `sections`; `section-names` cannot.
- Likes/farts now use `hooks/useOptimisticPostMetrics.js` for local optimistic UI updates and REST `PUT` requests.
- `lib/query.js` and `lib/mutation.js` were removed with the GraphQL dependencies.

Backend-side, the Strapi migration is mostly package/config work:

- Strapi packages moved to v5.
- GraphQL and unused i18n plugin dependencies/config were removed.
- Cloudinary and users-permissions remain configured.
- `TRANSFER_TOKEN_SALT` was added for Strapi v5 admin transfer-token config.
