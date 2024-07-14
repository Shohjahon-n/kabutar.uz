import { useMutation } from "@tanstack/react-query";
import postUser from "../api/axiosConfig";

export const usePostData = () => {
    return useMutation({
        mutationFn: (data: any) => postUser.post("/register", data),
    });
}