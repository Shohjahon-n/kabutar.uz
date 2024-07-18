import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useGetUser';
import React from 'react';

interface IFormInput {
    phoneNumber: string;
    password: string;
}

export const Login: React.FC = () => {
    const mutation = useLogin();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<IFormInput>();

    const onSubmit = (data: IFormInput) => {
        mutation.mutate(data);
        reset();
        console.log(data);
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        Login
                    </Heading>
                    <FormControl mt={6}>
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                            placeholder="Phone Number"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            {...register('phoneNumber', {
                                required: 'Phone Number is required',
                                minLength: { value: 3, message: 'Minimum length is 3' },
                                maxLength: { value: 20, message: 'Maximum length is 20' },
                            })}
                        />
                        <Text color={'red'}>{errors.phoneNumber?.message}</Text>
                    </FormControl>
                    <FormControl mb={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="Password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Minimum length is 6' },
                                maxLength: { value: 20, message: 'Maximum length is 20' },
                            })}
                        />
                        <Text color={'red'}>{errors.password?.message}</Text>
                    </FormControl>
                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            type="submit"
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
                    {mutation.isError && (
                        <Text color="red.500">{(mutation.error as Error).message}</Text>
                    )}
                    {mutation.isSuccess && (
                        <Text color="green.500">Login successful!</Text>
                    )}
                </form>
            </Stack>
        </Flex>
    );
};
