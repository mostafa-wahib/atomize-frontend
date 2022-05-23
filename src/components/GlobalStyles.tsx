import { Global } from "@mantine/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        form: {
          width: "50%",
        },
        form__card: {
          width: "75%",
          maxWidth: "40em",
        },
        button: {
          backgroundColor: theme.colors.accent[0],
          "&:hover": { backgroundColor: theme.colors.accent[1] },
        },
      })}
    />
  );
}

export default GlobalStyles;
