import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  // Check if the hostname is 'habitcommit.nosekjan.tech'
  // We also check for localhost for testing purposes if needed, though usually subdomains are harder to test locally without /etc/hosts modification
  if (hostname === "habitcommit.nosekjan.tech") {
    // Rewrite to /habitcommit
    context.url.pathname = `/habitcommit${context.url.pathname}`;
    return next();
  }

  return next();
};
