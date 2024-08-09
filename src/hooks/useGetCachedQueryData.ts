import { useQueryClient } from '@tanstack/react-query';

export const useGetCachedQueryData = (key: any) => {
    const queryClient = useQueryClient();

    // Make sure that the key is wrapped in an array for this to work
    const data = queryClient.getQueryData([key]);
    return data;
};
