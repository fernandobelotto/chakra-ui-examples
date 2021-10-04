import { Button, IconButton } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';
import { Editable, EditableInput, EditablePreview } from '@chakra-ui/editable';
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/input';
import { Divider, HStack, Stack, Text } from '@chakra-ui/layout';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/number-input';
import { PinInput, PinInputField } from '@chakra-ui/pin-input';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Select } from '@chakra-ui/select';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/slider';
import { Switch } from '@chakra-ui/switch';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';

export default function FormPage() {
  return (
    <>
      <Text fontSize="3xl" mt="10">
        Button
      </Text>
      <Divider mb="5" />
      <Button colorScheme="blue">Button</Button>
      <Text fontSize="3xl" mt="10">
        Checkbox
      </Text>
      <Divider mb="5" />
      <Checkbox defaultIsChecked>Checkbox</Checkbox>

      <Text fontSize="3xl" mt="10">
        Editable
      </Text>
      <Divider mb="5" />
      <Editable defaultValue="Take some chakra">
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Text fontSize="3xl" mt="10">
        FormControl
      </Text>
      <Divider mb="5" />

      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl as="fieldset" mt="5">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>

      <Text fontSize="3xl" mt="10">
        IconButton
      </Text>
      <Divider mb="5" />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
      />

      <Text fontSize="3xl" mt="10">
        Input
      </Text>
      <Divider mb="5" />

      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
        <InputGroup>
          <InputLeftAddon children="+234" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>

        {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
        <InputGroup size="sm">
          <InputLeftAddon children="https://" />
          <Input placeholder="mysite" />
          <InputRightAddon children=".com" />
        </InputGroup>
      </Stack>

      <Text fontSize="3xl" mt="10">
        NumberInput
      </Text>
      <Divider mb="5" />

      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Text fontSize="3xl" mt="10">
        PinInput
      </Text>
      <Divider mb="5" />

      <HStack>
        <PinInput>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

      <Text fontSize="3xl" mt="10">
        Radio
      </Text>
      <Divider mb="5" />

      <RadioGroup>
        <Stack direction="row">
          <Radio value="1">First</Radio>
          <Radio value="2">Second</Radio>
          <Radio value="3">Third</Radio>
        </Stack>
      </RadioGroup>

      <Text fontSize="3xl" mt="10">
        Select
      </Text>
      <Divider mb="5" />
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>

      <Text fontSize="3xl" mt="10">
        Slider
      </Text>
      <Divider mb="5" />
      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text fontSize="3xl" mt="10">
        Switch
      </Text>
      <Divider mb="5" />
      <Switch id="email-alerts" />

      <Text fontSize="3xl" mt="10">
        Textarea
      </Text>
      <Divider mb="5" />
      <Textarea placeholder="Here is a sample placeholder" />
    </>
  );
}
