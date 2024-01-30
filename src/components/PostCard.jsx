import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useContext, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PostsContext from '../providers/PostsProvider';
import axios from 'axios';

function PostCard({ authorFirstName, image, content, id }) {

  const [isLiked, setIsLiked] = useState(false);
  const { posts, setPosts } = useContext(PostsContext);
  return (
    <Card sx={{ maxWidth: 345, mb: '3rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {authorFirstName.substring(0, 1)}
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      {(image.length > 0) ?
        (<CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />)
        : null
      }

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setIsLiked(!isLiked)}>
          {
            (isLiked) ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteBorderIcon />
          }
        </IconButton>
        <IconButton aria-label="delete" onClick={(e) => {
          e.preventDefault();
          const newPosts = posts.filter((post) => post.id !== id);
          axios.delete(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: { 'app-id': import.meta.env.VITE_APP_ID }
          })
          setPosts(newPosts);
        }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>

    </Card >
  );
}

export default React.memo(PostCard)