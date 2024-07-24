import { createBrowserRouter } from 'react-router-dom';
import AuthenticationLayout from 'src/layouts/AuthenticationLayout';
import MainLayout from 'src/layouts/MainLayout';
import LoginPage from 'src/pages/LoginPage';
import ProductListPage from 'src/pages/ProductListPage';
import RegisterPage from 'src/pages/RegisterPage';

export default function useRouteElements() {
    const element = createBrowserRouter([
        {
            path: '/',
            element: (
                <MainLayout>
                    <ProductListPage />
                </MainLayout>
            )
        },
        {
            path: '/login',
            element: (
                <AuthenticationLayout>
                    <LoginPage />
                </AuthenticationLayout>
            )
        },
        {
            path: '/register',
            element: (
                <AuthenticationLayout>
                    <RegisterPage />
                </AuthenticationLayout>
            )
        }
    ]);

    return element;
}
