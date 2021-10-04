import { Box, Divider, Text } from '@chakra-ui/layout';
import React from 'react';

export default function FeaturesPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Gradient
      </Text>
      <Divider mb="5" />
      <Box w="100%" h="200px" bgGradient="linear(to-l, #7928CA, #FF0080)" />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </>
  );
}
