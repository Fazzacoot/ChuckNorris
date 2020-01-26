import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import * as CategoryTypes from './__generated__/NorrisCategories';
import { CategoryCard, Loading, Error } from '../components';
import { useStyles } from '../styles/pages/categores';
import Grid from '@material-ui/core/Grid';

export const CATEGORIES = gql`
  query NorrisCategories{
  categories{
    id
    name
  }
}
`;

interface CategoryProps extends RouteComponentProps {}

const Categories: React.FC<CategoryProps> = () => {
  const classes = useStyles();

  const {
    data,
    loading,
    error
  } = useQuery<CategoryTypes.NorrisCategories>(CATEGORIES);

  if (loading) return <Loading/>;
  if (error) return <Error error = {error}/>;
  if (!data) return <p>Not found</p>;
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        {data.categories &&
          data.categories.map((category: any) => (
            <Grid className={classes.cardItem} item xs={12} sm={12} md={6} lg={3} key={category.id}>
              <CategoryCard key={category.id} category={category} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Categories;