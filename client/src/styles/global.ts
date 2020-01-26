import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const body = { margin: 0, padding: 0 };
export const unit = 8;
export const colors = {
  primary: "#220a82",
  secondary: "#14cbc4",
  accent: "#e535ab",
  background: "#f7f8fa",
  grey: "#d8d9e0",
  text: "#343c5a",
  textSecondary: "#747790"
};

export const globalStyles = makeStyles((theme: Theme) =>
  createStyles({
    centerText: {
      textAlign: "center"
    }
  })
);
