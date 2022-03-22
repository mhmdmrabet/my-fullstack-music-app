/* eslint-disable jsx-a11y/aria-proptypes */
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  ButtonGroup,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ReactHowler from "react-howler";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
  MdOutlineRepeat,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);

  const setPlayState = (value) => {
    setPlaying(value);
  };

  const onShuffle = () => {
    setShuffle((state) => !state);
  };
  const onRepeat = () => {
    setRepeat((state) => !state);
  };
  const prevSong = () => {
    setIndex((prevIndex) => {
      return prevIndex ? prevIndex - 1 : songs.length - 1;
    });
  };
  const nextSong = (): number | any => {
    setIndex((prevIndex) => {
      if (shuffle) {
        const randomIndexInArrayOfSongs = Math.floor(
          Math.random() * songs.length
        );
        if (randomIndexInArrayOfSongs === prevIndex) {
          return nextSong();
        }
        return randomIndexInArrayOfSongs;
      }
      return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <Box>
      <Box>
        <ReactHowler playing={playing} src={activeSong?.url} ref={soundRef} />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            outline="none"
            variant="link"
            aria-label="suffle"
            fontSize="24px"
            color={shuffle && "white"}
            onClick={onShuffle}
            icon={<MdShuffle />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          {playing ? (
            <IconButton
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="40px"
              color="white"
              icon={
                <MdOutlinePauseCircleFilled
                  onClick={() => setPlayState(false)}
                />
              }
            />
          ) : (
            <IconButton
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              icon={
                <MdOutlinePlayCircleFilled onClick={() => setPlayState(true)} />
              }
            />
          )}
          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            color={repeat && "white"}
            onClick={onRepeat}
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="x-small">1:21</Text>
          </Box>
          <Box width="90%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="x-small">3:45</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
