import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Divider, Text } from '@chakra-ui/layout';
import {
  Collapse,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from '@chakra-ui/transition';
import React from 'react';

export default function OtherPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Fade
      </Text>
      <Divider mb="5" />
      <FadeExample />
      <ScaleFadeEx />
      <SlideEx />
      <SlideFadeEx />
      <CollapseEx />
    </>
  );
}

function FadeExample() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </Fade>
    </>
  );
}

function ScaleFadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Fade
        </Box>
      </ScaleFade>
    </>
  );
}

function SlideEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      {/* <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}> */}
      <Slide direction="bottom" in={isOpen}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>aahsduhasduhsaduhsdau</Text>
        </Box>
      </Slide>
    </>
  );
}

function SlideFadeEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>acshuadshuadsuhahdus</Text>
        </Box>
      </SlideFade>
    </>
  );
}

function CollapseEx() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>hasduhadsuhdasuhasdu</Text>
        </Box>
      </Collapse>
    </>
  );
}
