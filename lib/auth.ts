import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = request.cookies;

    if (token) {
      let user;
      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({ where: { id } });
        if (!user) throw new Error("Not real user");
      } catch (error) {
        return response.status(401).json({ error: "Not Authorizied" });
      }
      return handler(request, response, user);
    }

    return response.status(401).json({ error: "Not Authorizied" });
  };
};
