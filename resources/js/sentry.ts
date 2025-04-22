import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://201e517a94d7a57bf1395c87f4ca436e@o4509194194386944.ingest.us.sentry.io/4509194295902208",
  debug: true,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
  release: import.meta.env.VITE_APP_VERSION || "poke-rps@dev",
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
});
