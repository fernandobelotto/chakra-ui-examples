import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/alert';
import { Button } from '@chakra-ui/button';
import { CloseButton } from '@chakra-ui/close-button';
import { Divider, Stack, Text } from '@chakra-ui/layout';
import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from '@chakra-ui/progress';
import { Skeleton } from '@chakra-ui/skeleton';
import { Spinner } from '@chakra-ui/spinner';
import { useToast } from '@chakra-ui/toast';
import React from 'react';

export default function FeedbackPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        VisuallyHidden
      </Text>
      <Divider mb="5" />
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
      <Text fontSize="3xl" mt="10">
        CircularProgress
      </Text>
      <Divider mb="5" />
      <CircularProgress value={80} />
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>

      <Text fontSize="3xl" mt="10">
        Progress
      </Text>
      <Divider mb="5" />
      <Progress size="xs" isIndeterminate />
      <Progress size="xs" value={20} colorScheme="pink" />

      <Text fontSize="3xl" mt="10">
        Skeleton
      </Text>
      <Divider mb="5" />
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>

      <Text fontSize="3xl" mt="10">
        Spinner
      </Text>
      <Divider mb="5" />
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" color="red.500" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Stack>

      <Text fontSize="3xl" mt="10">
        Toast
      </Text>
      <Divider mb="5" />
      <ToastExample />
    </>
  );
}

function ToastExample() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>
  );
}
