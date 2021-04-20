import { defineConfig } from "umi";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  antd: {},
  nodeModulesTransform: {
    type: "none",
  },
  fastRefresh: {},
  define: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    API_URI: process.env.API_URI,
  },
});
