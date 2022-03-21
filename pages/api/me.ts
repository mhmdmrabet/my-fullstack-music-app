import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

export default validateRoute(async (_, response, user) => {
  const playlistsCount = await prisma.playList.count({
    where: { userId: user.id },
  });
  return response.json({ ...user, playlistsCount });
});
