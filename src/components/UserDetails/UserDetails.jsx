import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

export default function UserDetails() {

    const { userPromise } = useLoaderData();
    return (
        <>
            <Suspense fallback={<div>Loading... User Card</div>}>
                <Await
                    resolve={userPromise}
                    errorElement={<h1>Error, while loading the element</h1>}
                >
                    {
                        data => {
                            const user = data.data;
                            return (
                                <Card sx={{ display: 'flex', mt: '2rem' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {user.firstName + " " + user.lastName}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {user.email}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={user.picture}
                                        alt="Live from space album cover"
                                    />
                                </Card>
                            )
                        }
                    }
                </Await>
            </Suspense>
        </>
    );
}