import { Center, createStyles, Grid, Title, Text } from "@mantine/core";
import UrlShortener from "./UrlShortener";
const useStyle = createStyles((theme) => ({
  wrapper: { alignItems: "stretch", height: "100%" },
  intro: { paddingTop: "15rem" },
  title: { fontSize: "clamp(3rem, 3vw + 1rem, 10rem)" },
}));
function MainPage() {
  const { classes } = useStyle();
  return (
    <Grid className={classes.wrapper}>
      <Grid.Col lg={6} sm={12}>
        <Center className={classes.intro}>
          <Title className={classes.title}>Shorten.Track.Win</Title>
        </Center>
        <Center mt="md">
          <Text> Test</Text>
        </Center>
      </Grid.Col>
      <Grid.Col lg={6}>Test</Grid.Col>
      <Grid.Col span={12}>
        <UrlShortener />
      </Grid.Col>
    </Grid>
  );
}

export default MainPage;
