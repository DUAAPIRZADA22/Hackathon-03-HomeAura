export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-28";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "undefined";

// Validate required environment variables
if (!projectId || projectId === "undefined") {
  throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
}

