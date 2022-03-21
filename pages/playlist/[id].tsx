import { Box } from "@chakra-ui/layout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const Playlist = ({ playlist }) => {
  return <Box>{playlist.name} </Box>;
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  const [playlist] = await prisma.playList.findMany({
    where: { id: +query.id, userId: id },
    include: {
      songs: { include: { artist: { select: { name: true, id: true } } } },
    },
  });
  return { props: { playlist } };
};

export default Playlist;
