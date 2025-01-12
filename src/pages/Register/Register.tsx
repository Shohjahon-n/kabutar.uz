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
import { usePostData } from '../../hooks/usePostData';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    username: string
    phoneNumber: string
    password: string
}

const UserProfileEdit: React.FC = () => {
    const mutation = usePostData();

    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: {
            username: '',
            phoneNumber: '',
            password: '',
        },
        mode: 'onChange',
    });

    const onSubmit = (data: IFormInput) => {
        mutation.mutate(data);
        reset();
        localStorage.setItem('token', JSON.stringify(mutation.data.token));
        navigate('/');
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
                <form onSubmit={handleSubmit((data: IFormInput) => onSubmit(data))}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                        Register
                    </Heading>
                    <FormControl id="userName">
                        <FormLabel>User name</FormLabel>
                        <Input
                            placeholder="userName"
                            _placeholder={{ color: 'gray.500' }}
                            type="text"
                            {...register('username', { required: { value: true, message: 'User name is required' }, minLength: { value: 3, message: 'Minimum length should be 3' }, maxLength: { value: 20, message: 'Maximum length should be 20' } })}
                        />
                        <Text color={'red'}>{errors.username?.message}</Text>
                    </FormControl>
                    <FormControl id="PhoneNumber">
                        <FormLabel>Phone number</FormLabel>
                        <Input
                            placeholder="+998 (__) ___-__-__"
                            _placeholder={{ color: 'gray.500' }}
                            type="number"
                            {...register('phoneNumber', { required: { value: true, message: 'Phone number is required' }, minLength: { value: 12, message: 'Minimum length should be 12' }, maxLength: { value: 12, message: 'Maximum length should be 12' } })}
                        />
                        <Text color={'red'}>{errors.phoneNumber?.message}</Text>
                    </FormControl>
                    <FormControl id="password" mb={6}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            placeholder="Password"
                            _placeholder={{ color: 'gray.500' }}
                            type="password"
                            {...register('password', { required: { value: true, message: 'Password is required' }, minLength: { value: 6, message: 'Minimum length should be 6' }, maxLength: { value: 20, message: 'Maximum length should be 20' } })}
                        />
                        <Text color={'red'}>{errors.password?.message}</Text>
                    </FormControl>
                    <Stack spacing={6} direction={['column', 'row']}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="full"
                            type='submit'
                            _hover={{
                                bg: 'blue.500',
                            }}
                        >
                            Submit
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Flex >
    );
};

export default UserProfileEdit;
