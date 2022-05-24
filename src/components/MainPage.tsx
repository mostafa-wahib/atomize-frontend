import { Center, createStyles, Grid, Title, Text } from "@mantine/core";
const useStyle = createStyles((theme) => ({
  wrapper: { alignItems: "stretch", height: "100%" },
  intro: { paddingTop: "20rem" },
  title: { fontSize: "clamp(3rem, 3vw + 1rem, 10rem)" },
}));
function MainPage() {
  const { classes } = useStyle();
  return (
    <Grid className={classes.wrapper}>
      <Grid.Col lg={6} sm={12}>
        <Center className={classes.intro}>
          <h1 className={classes.title}>Shorten.Track.Win</h1>
        </Center>
        <Text> Test</Text>
      </Grid.Col>
      <Grid.Col lg={6} sm={12}>
        Test
      </Grid.Col>
    </Grid>
  );
}

export default MainPage;
