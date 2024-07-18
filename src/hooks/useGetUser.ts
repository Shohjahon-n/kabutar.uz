import { useMutation } from '@tanstack/react-query';
import apiClient from '../api/axiosConfig';

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: any) => apiClient.post('/auth/login', data),
    });
};
