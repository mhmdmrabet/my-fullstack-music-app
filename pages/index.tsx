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
      Home Page
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
