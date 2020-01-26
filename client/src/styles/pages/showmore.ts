import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      background: "#ffdd00"
    },
    container: {
      border: "1px solid #f4f4f4"
    },
    second: {
      background: "#f4f4f4"
    }
  })
);
