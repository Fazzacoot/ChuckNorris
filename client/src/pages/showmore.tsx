import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '../components/styled/container';
import { globalStyles } from '../styles/global';
import { useStyles } from '../styles/pages/showmore';


interface JokeProps {
  location: {
    state: {
      jokeObj: {
        id: string
        category: string
        iconUrl: string
        url: string
        value: string
        createdAt: string
        updatedAt: string
      }
    }
  }
}

interface JokeObj {
  jokeObj: {
    id: string
    category: string
    iconUrl: string
    url: string
    value: string
    createdAt: string
    updatedAt: string
  }
}


const ShowMore: React.FC<JokeProps> = (props) => {
  const global = globalStyles();
  const classes = useStyles();
  let jokeObj: JokeObj = {
    jokeObj: {
      id: "",
      category: "",
      iconUrl: "",
      url: "",
      value: "",
      createdAt: "",
      updatedAt: "",
    }
  }
  const [joke, setJoke] = useState<JokeObj>(jokeObj);

  useEffect(() => {
    jokeObj = {
      jokeObj: {
        id: props.location.state.jokeObj.id,
        category: props.location.state.jokeObj.category,
        iconUrl: props.location.state.jokeObj.iconUrl,
        url: props.location.state.jokeObj.url,
        value: props.location.state.jokeObj.value,
        createdAt: props.location.state.jokeObj.createdAt,
        updatedAt: props.location.state.jokeObj.updatedAt,
      }
    }
    setJoke(jokeObj);
  }, [])
  return (
    <Container className={global.centerText}>
      <Grid container spacing={3} direction="row" className={classes.container}>
        <Grid item xs={12} className={classes.iconContainer}>
          <img src={joke.jokeObj.iconUrl} />
        </Grid>
        <Grid item xs={12} className={classes.second}>
          <h1>{joke.jokeObj.category.toUpperCase()}</h1>
        </Grid>
        <Grid item xs={12}>
          <span>{joke.jokeObj.value}</span>
        </Grid>
        <Grid item xs={12}  className={classes.second}>
          <a href={joke.jokeObj.url} target="_blank">{joke.jokeObj.url}</a>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ShowMore;