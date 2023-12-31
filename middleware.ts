import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ["/", "/blog", "/blog/:slug", "/api/serp"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/app", "/(api|trpc)(.*)"],
};
