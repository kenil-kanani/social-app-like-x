import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import UserDetails from '../components/UserDetails/UserDetails';
import SocialApp from '../components/SocialApp';

// export default function CustomRoutes() {
//     return (
//         <Routes>
//             <Route path='/' element={<SocialApp />} />
//             <Route path='/user/:id' element={<UserDetails />} />
//         </Routes>
//     )
// }

const router = createBrowserRouter([
    {
        path: '/',
        element: <SocialApp />,
        children: [
            {
                path: 'user/:id',
                element: <UserDetails />
            }
        ]
    }
])

export default router;