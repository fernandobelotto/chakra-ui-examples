import { CloseButton } from '@chakra-ui/close-button';
import {
  Badge,
  Code,
  Divider,
  Kbd,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/stat';
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/table';
import { Tag } from '@chakra-ui/tag';
import React from 'react';

export default function DataDisplayPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Badge
      </Text>
      <Divider mb="5" />
      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>

      <Text fontSize="3xl" mt="10">
        CloseButton
      </Text>
      <Divider mb="5" />
      <CloseButton />

      <Text fontSize="3xl" mt="10">
        Code
      </Text>
      <Divider mb="5" />
      <Stack direction="row">
        <Code children="console.log(welcome)" />
        <Code colorScheme="red" children="var chakra = 'awesome!'" />
        <Code colorScheme="yellow" children="npm install chakra" />
      </Stack>

      <Text fontSize="3xl" mt="10">
        Divider
      </Text>
      <Divider mb="5" />
      <Divider mb="5" />

      <Text fontSize="3xl" mt="10">
        Kbd
      </Text>
      <Divider mb="5" />
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>

      <Text fontSize="3xl" mt="10">
        UnorderedList
      </Text>
      <Divider mb="5" />
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>

      <Text fontSize="3xl" mt="10">
        Stat
      </Text>
      <Divider mb="5" />
      <Stat>
        <StatLabel>Collected Fees</StatLabel>
        <StatNumber>£0.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>

      <Text fontSize="3xl" mt="10">
        Table
      </Text>
      <Divider mb="5" />
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>

      <Text fontSize="3xl" mt="10">
        Tag
      </Text>
      <Divider mb="5" />
      <Tag>Sample Tag</Tag>
    </>
  );
}
