import { Button } from '@chakra-ui/button';
import { PhoneIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/image';
import {
  AspectRatio,
  Box,
  Center,
  Circle,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Square,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/layout';
import React from 'react';
import AirbnbCard from '../components/AirbnbCard';
export default function LayoutPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        AspectRatio
      </Text>
      <Divider mb="5" />

      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="8172733a-c6e8-40bc-bba3-924cf5516cec"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>

      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>
      <AspectRatio ratio={16 / 9}>
        <iframe
          title="ccaee929-c60c-434e-9e0a-96d8f3997839"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          alt="demo"
        />
      </AspectRatio>

      <Text fontSize="3xl" mt="10">
        Box
      </Text>
      <Divider mb="5" />
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Box bg="Blue" w="100%" p={10} color="yellow">
        This is the second Box
      </Box>
      <AirbnbCard />

      <Text fontSize="3xl" mt="10">
        Center, Square & Circle
      </Text>
      <Divider mb="5" />
      <Box bg="tomato" w="100%" p={4} color="white">
        <Center>This is the center of the box</Center>
      </Box>
      <HStack>
        <Circle size="100px" bg="tomato" color="white">
          <PhoneIcon />
        </Circle>
        <Square size="150px" bg="purple.700" color="white">
          <PhoneIcon />
        </Square>
      </HStack>

      <Text fontSize="3xl" mt="10">
        Container
      </Text>
      <Divider mb="5" />
      <VStack>
        <Container>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production
        </Container>
        <Container maxW="container.sm">
          Small Container || There are many benefits to a joint design and
          development system. Not only does it bring benefits to the design
          team, but it also brings benefits to engineering teams. It makes sure
          that our experiences have a consistent look and feel, not just in our
          design specs, but in production
        </Container>
        <Container maxW="container.xl">
          Extra-Large Container || There are many benefits to a joint design and
          development system. Not only does it bring benefits to the design
          team, but it also brings benefits to engineering teams. It makes sure
          that our experiences have a consistent look and feel, not just in our
          design specs, but in production
        </Container>
        <Container maxW="container.lg">
          Large Container || There are many benefits to a joint design and
          development system. Not only does it bring benefits to the design
          team, but it also brings benefits to engineering teams. It makes sure
          that our experiences have a consistent look and feel, not just in our
          design specs, but in production
        </Container>
        <Container maxW="container.md">
          Medium Container || There are many benefits to a joint design and
          development system. Not only does it bring benefits to the design
          team, but it also brings benefits to engineering teams. It makes sure
          that our experiences have a consistent look and feel, not just in our
          design specs, but in production
        </Container>
      </VStack>

      <Text fontSize="3xl" mt="10">
        Flex
      </Text>
      <Divider mb="5" />
      <Text fontSize="xl" mt="10">
        Flex is Box with display: flex and comes with helpful style shorthand.
        It renders a div element.
      </Text>
      <Flex color="black">
        <Center w="100px" bg="green.500">
          <Text>Box 1</Text>
        </Center>
        <Square bg="blue.500" size="150px">
          <Text>Box 2</Text>
        </Square>
        <Box flex="1" bg="tomato">
          <Text>Box 3</Text>
        </Box>
      </Flex>

      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>

      <Box>
        <Text>Flex and Spacer: Full width, equal Spacing</Text>
        <Flex>
          <Box w="70px" h="10" bg="red.500" />
          <Spacer />
          <Box w="170px" h="10" bg="red.500" />
          <Spacer />
          <Box w="180px" h="10" bg="red.500" />
        </Flex>

        <Text>
          Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box w="70px" h="10" bg="blue.500" />
          <Box w="170px" h="10" bg="blue.500" />
          <Box w="180px" h="10" bg="blue.500" />
        </Grid>

        <Text>
          HStack: The children have equal spacing but don't span the whole
          container
        </Text>
        <HStack spacing="24px">
          <Box w="70px" h="10" bg="teal.500" />
          <Box w="170px" h="10" bg="teal.500" />
          <Box w="180px" h="10" bg="teal.500" />
        </HStack>
      </Box>

      <Flex>
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>

      <Text fontSize="3xl" mt="10">
        Grid
      </Text>
      <Divider mb="5" />
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>

      <Text fontSize="3xl" mt="10">
        SimpleGrid
      </Text>
      <Divider mb="5" />
      {/* Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}` will have the same effect. */}

      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>

      <Text fontSize="3xl" mt="10">
        Stack, HStack and VStack
      </Text>
      <Divider mb="5" />
      <Text fontSize="md" mt="5">
        Stack: Used to add spacing between elements in the horizontal or
        vertical direction. It supports responsive values.
      </Text>
      <Text fontSize="md" mt="5">
        HStack: Used to add spacing between elements in horizontal direction,
        and centers them.
      </Text>
      <Text fontSize="md" mt="5">
        VStack: Used to add spacing between elements in vertical direction only,
        and centers them.
      </Text>

      <Stack direction={['column', 'row']} spacing="24px">
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </Stack>

      <Text fontSize="3xl" mt="10">
        Wrap & WrapItem
      </Text>
      <Divider mb="5" />
      <Wrap>
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
      </Wrap>
    </>
  );
}
