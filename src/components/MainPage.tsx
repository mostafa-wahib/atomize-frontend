import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: { color: theme.colors.accent[0] },
}));
function MainPage() {
  const { classes } = useStyles();
  return <div className={classes.wrapper}></div>;
}

export default MainPage;
