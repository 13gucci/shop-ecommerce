import { keepPreviousData, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from 'src/contexts/auth.context';
import useRouteElements from 'src/hooks/useRouteElements';

function App() {
    const router = useRouteElements();

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                placeholderData: keepPreviousData
            }
        }
    });

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    );
}

export default App;
