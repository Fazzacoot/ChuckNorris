import general from '../assets/images/chuck.jpeg';
import animal from '../assets/images/animal.jpeg';
import career from '../assets/images/career.jpeg';
import dev from '../assets/images/dev.jpeg';
import fashion from '../assets/images/fashion.jpeg';
import food from '../assets/images/food.jpeg';
import history from '../assets/images/history.jpeg';

const setImage = (id: string) => {
  switch (id) {
    case "1":
      return animal;
    case "2":
      return career;
    case "4":
      return dev;
    case "6":
      return fashion;
    case "7":
      return food;
    case "8":
      return history;
    default:
      return general;
  }
}

export { setImage };