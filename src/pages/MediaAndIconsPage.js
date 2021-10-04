import { Avatar } from '@chakra-ui/avatar';
import {
  Divider,
  HStack,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';
import React from 'react';
import { Image } from '@chakra-ui/image';

export default function MediaAndIconsPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Avatar
      </Text>
      <Divider mb="5" />
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xs"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />{' '}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{' '}
        </WrapItem>
      </Wrap>

      <Text fontSize="3xl" mt="10">
        Icons
      </Text>
      <Divider mb="5" />

      <HStack>
        <PhoneIcon />

        <AddIcon w={6} h={6} />

        <WarningIcon w={8} h={8} color="red.500" />
      </HStack>

      <Text fontSize="3xl" mt="10">
        Image
      </Text>
      <Divider mb="5" />
      <Stack direction="row">
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          boxSize="100px"
          objectFit="cover"
          alt="Dan Abramov"
        />
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Image
          fallbackSrc="https://via.placeholder.com/150"
          boxSize="200px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Stack>
    </>
  );
}
