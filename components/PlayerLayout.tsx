import { Box } from "@chakra-ui/layout";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        SIDEBAR
      </Box>
      <Box marginBottom="100px" marginLeft="250px">
        {children}
      </Box>
      <Box position="absolute" bottom="0" left="0">
        PLAYER
      </Box>
    </Box>
  );
};

export default PlayerLayout;
