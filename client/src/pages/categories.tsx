import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import * as CategoryTypes from './__generated__/NorrisCategories';
import { CategoryCard } from '../components';
import { useStyles } from '../styles/pages/categores';
import Grid from '@material-ui/core/Grid';
import preloader from '../assets/images/preloader.gif';

export const CATEGORIES = gql`
  query NorrisCategories{
  categories{
    id
    name
  }
}
`;

interface CategoryProps extends RouteComponentProps {
  // category: CategoryTypes.NorrisCategories_categories;
 }

const Categories: React.FC<CategoryProps> = () => {
  const classes = useStyles();

  const {
    data,
    loading,
    error
  } = useQuery<CategoryTypes.NorrisCategories>(CATEGORIES);

  if (loading) return <div><img src={preloader} alt="loading..." /></div>;
  if (error) return <p>ERROR: {error.message}</p>;
  if (!data) return <p>Not found</p>;

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        {data.categories &&
          data.categories.map((category: any) => (
            <Grid className={classes.cardItem} item xs={12} sm={12} md={6} lg={3}>
              <CategoryCard key={category.id} category={category} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Categories;