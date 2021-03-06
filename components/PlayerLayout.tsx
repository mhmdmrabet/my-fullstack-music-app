import { Box } from "@chakra-ui/layout";
import PLayerBar from "./PlayerBar";
import SideBar from "./SideBar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <SideBar />
      </Box>
      <Box marginBottom="100px" marginLeft="250px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" bottom="0" left="0">
        <PLayerBar />
      </Box>
    </Box>
  );
};

export default PlayerLayout;
