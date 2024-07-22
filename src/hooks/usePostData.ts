import { useMutation } from '@tanstack/react-query';
import apiClient from '../api/axiosConfig';

export const usePostData = () => {
    return useMutation({
        mutationFn: (data: any) => apiClient.post('/auth/register', data).then((res) => res.data),
    });
};