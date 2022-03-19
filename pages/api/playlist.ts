import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (request, response, user) => {
  const playlists = await prisma.playList.findMany({
    where: { userId: user.id },
    orderBy: {
      name: "asc",
    },
  });
  return response.json(playlists);
});
