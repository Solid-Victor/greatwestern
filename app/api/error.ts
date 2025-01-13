import * as Sentry from "@sentry/nextjs";

export const onRequestError = (error: Error) => {
  Sentry.captureException(error);
}; 