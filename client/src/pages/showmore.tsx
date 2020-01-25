import React from 'react'

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

const Categories: React.FC<JokeProps> = (props) => {
  console.log(props.location.state);
  console.log(props.location.state.jokeObj.url);

  return (
    <div >
      show more
    </div>
  );
}

export default Categories;