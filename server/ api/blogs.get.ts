import fs from "fs";

export default defineEventHandler(
  async () => JSON.parse(fs.readFileSync(process.env.BLOG_DB, "utf-8")).articles
);