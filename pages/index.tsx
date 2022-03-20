import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/GradientLayout";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  return (
    <GradientLayout
      color="blue"
      subtitle="Profile"
      title="M'rabet Imran"
      description="15 public playlists"
      image="./me.jpeg"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="medium">only visible to tyou</Text>
        </Box>
        <Flex gap={5}>
          {artists.map(({ name, id }) => (
            <Box
              bg="gray.900"
              borderRadius="4px"
              padding="15px"
              width="20%"
              key={id}
            >
              <Box width="100%">
                <Image
                  src="https://picsum.photos/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
