import { MetadataRoute } from "next";
import constants from "@/utils/constans.json";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${constants.domain}/sitemap.xml`,
  };
}
