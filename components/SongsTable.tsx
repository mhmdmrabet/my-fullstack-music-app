import {
  Box,
  Table,
  Thead,
  Td,
  Tr,
  Th,
  Tbody,
  IconButton,
} from "@chakra-ui/react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useStoreActions } from "easy-peasy";
import { formatDate, formatTime } from "../lib/formatters";

const SongsTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            colorScheme="green"
            size="lg"
            isRound
            aria-label="play"
          />
        </Box>
        <Table variant="unstyled">
          <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Added</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map(({ id, name, createdAt, duration }, index) => (
              <Tr
                key={id}
                sx={{
                  transition: "all .3s",
                  "&hover": { bg: "rgba(255,255,255,0.1)" },
                }}
                cursor="cursor"
              >
                <Td>{index + 1}</Td>
                <Td>{name}</Td>
                <Td>{formatDate(createdAt)}</Td>
                <Td>{formatTime(duration)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongsTable;
