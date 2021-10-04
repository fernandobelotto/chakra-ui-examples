import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/breadcrumb';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/layout';
import React from 'react';

export default function NavigationPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Breadcrumb
      </Text>
      <Divider mb="5" />
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Text fontSize="3xl" mt="10">
        Link
      </Text>
      <Divider mb="5" />
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>

      <Text fontSize="3xl" mt="10">
        LinkBox & LinkOverlay
      </Text>
      <Divider mb="5" />
      <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href="#">
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
      </LinkBox>
    </>
  );
}
