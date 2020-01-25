import React, { useState } from 'react';
import * as CategoryTypes from '../pages/__generated__/NorrisCategories';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { setImage } from '../utils/categoryImages';
import { useStyles } from '../styles/components/categoryCards';
import { gql } from 'apollo-boost';
import * as JokeTypes from './__generated__/getJoke';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';


const JOKE = gql`
  query getJoke($category: String!){
  joke(category:$category){
   	id
    category
    iconUrl
    url
    value
    createdAt
    updatedAt
  }
}
`;

interface CategoryProps {
  category: CategoryTypes.NorrisCategories_categories;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
  const {
    data,
    error,
    refetch
  } = useQuery<JokeTypes.getJoke, JokeTypes.getJokeVariables>(JOKE, { variables: { category: category.name! } });


  const { id, name } = category;
  const [jokeText, setJokeText] = useState("Get ready to laugh");
  const [showMore, setShowMore] = useState(false);

  const classes = useStyles();

  const hadleSetJoke = (joke: string) => {
    refetch();
    if (error) return setJokeText(`Error ${error.message}`);
    if (!data) return setJokeText("No joke found");
    setShowMore(true);
    return setJokeText(joke);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={setImage(id!)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {jokeText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" onClick={hadleSetJoke.bind(null, data?.joke?.value!)}>
          Make me laugh
        </Button>
        {
          showMore &&
          <Button size="large" color="primary">
            <Link to={{
              pathname: "/showmore",
              state:{
                jokeObj: data?.joke
              }
            }} > Show More </Link>
          </Button>
        }
      </CardActions>
    </Card>
  );
}

export default CategoryCard;
