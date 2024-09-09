import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Browse, Login, Register } from '.';

const Body = () => {
    const appRouter = createBrowserRouter([
        { path: '/', element: <Login /> },
        { path: '/browse', element: <Browse /> },
        { path: '/register', element: <Register /> },
    ])
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body