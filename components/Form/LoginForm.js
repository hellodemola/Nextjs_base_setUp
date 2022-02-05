import {
  Input, Box, FormControl, FormLabel, Button, Heading, Text, Avatar,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { isSubmitting, isValid, isDirty } } = useForm({ mode: 'onChange' });
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <Box as="form" onSubmit={handleSubmit(handleLogin)}>
      <Box marginBottom="3em" textAlign="center">
        <Avatar bgColor="blue.100" mb="1em" />
        <Heading
          textTransform="uppercase"
          fontWeight="300"
        >
          Admin Login
        </Heading>
        <Text
          fontSize="16px"
          color="gray.600"
          fontWeight="900"
        >
          Please enter your details
        </Text>
      </Box>
      <FormControl marginY="1em">
        <FormLabel
          color="gray.600"
          fontSize="14px"
          fontWeight="900"
        >
          Email
        </FormLabel>
        <Input
          placeholder="someone@email.com"
          {...register('email', { required: true })}
        />
      </FormControl>

      <FormControl marginY="1em">
        <FormLabel
          color="gray.600"
          fontSize="14px"
          fontWeight="900"
        >
          Password
        </FormLabel>
        <Input {...register('password', { required: true })} type="password" />
      </FormControl>

      <Button
        bgColor="#0683ff"
        color="#fff"
        fontSize="16px"
        cursor="pointer"
        boxSizing="border-box"
        outline="none"
        width="100%"
        type="submit"
        disabled={!isDirty || !isValid || isSubmitting}
      >
        Login
      </Button>

    </Box>
  );
};

export default LoginForm;
