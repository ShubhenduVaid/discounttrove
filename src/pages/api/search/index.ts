import { NextApiResponse, NextApiRequest } from "next";
import type { GoogleLensParameters } from "serpapi";
import { getJson } from "serpapi";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Allow", ["GET"]);
  try {
    type undefString = string | undefined;
    const { query, method } = _req;
    const imgUrl = query.img as undefString;
    const price = query.price as undefString;

    if (method !== "GET") {
      res.status(405).json({ errorCode: `Method ${method} Not Allowed` });
    }

    if (imgUrl && method === "GET") {
      const params = {
        api_key: process.env.SEARCH_API_KEY,
        url: "https://m.media-amazon.com/images/I/81XKvu0amVL._AC_UY879_.jpg",
        hl: "en",
      } satisfies GoogleLensParameters;

      const response = await getJson("google_lens", params);
      const matches = response.visual_matches
        .filter((matches) => matches.price)
        .sort(
          (a: any, b: any) => a.price.extracted_value - b.price.extracted_value
        );
      res.status(200).json({ matches });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ errorCode: "Internal Server Error" });
  }
}
