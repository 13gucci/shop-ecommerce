import { useContext } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from 'src/contexts/auth.context';
import AuthenticationLayout from 'src/layouts/AuthenticationLayout';
import MainLayout from 'src/layouts/MainLayout';
import AllCategoriesPage from 'src/pages/AllCategoriesPage';
import CartPage from 'src/pages/CartPage';
import LoginPage from 'src/pages/LoginPage';
import ProductListPage from 'src/pages/ProductListPage';
import ProfilePage from 'src/pages/ProfilePage';
import RegisterPage from 'src/pages/RegisterPage';

//Route middleware ngăn người dùng move vào trang cần đăng nhập
const ProtectedRoute = () => {
    const { auth } = useContext(AuthContext);
    return auth.isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
};

//Route middleware ngăn người dùng move ra login/register khi đã logged in
const RejectedRoute = () => {
    const { auth } = useContext(AuthContext);
    return auth.isAuthenticated ? <Navigate to={'/'} /> : <Outlet />;
};

export default function useRouteElements() {
    const element = createBrowserRouter([
        {
            index: true,
            path: '/',
            element: (
                <MainLayout>
                    <ProductListPage />
                </MainLayout>
            )
        },
        {
            path: '/all_categories',
            element: (
                <MainLayout>
                    <AllCategoriesPage />
                </MainLayout>
            )
        },
        {
            path: '',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/profile',
                    element: (
                        <MainLayout>
                            <ProfilePage />
                        </MainLayout>
                    )
                },
                {
                    path: '/cart',
                    element: (
                        <MainLayout>
                            <CartPage />
                        </MainLayout>
                    )
                }
            ]
        },
        {
            path: '',
            element: <RejectedRoute />,
            children: [
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
            ]
        }
    ]);

    return element;
}
