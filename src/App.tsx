import { RouterProvider } from 'react-router-dom';
import useRouteElements from 'src/hooks/useRouteElements';

function App() {
    const router = useRouteElements();
    return <RouterProvider router={router} />;
}

export default App;
