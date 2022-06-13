import { Center, createStyles, Grid, Title, Text, Image } from "@mantine/core";
import UrlShortener from "./UrlShortener";
const useStyle = createStyles(() => ({
  wrapper: { alignItems: "stretch", height: "100%" },
  intro: { paddingTop: "15rem" },
  title: { fontSize: "clamp(4rem, 3vw + 1rem, 10rem)" },
}));
const MainPage: React.FC = () => {
  const { classes } = useStyle();
  return (
    <Grid className={classes.wrapper}>
      <Grid.Col lg={6} sm={12}>
        <Center className={classes.intro}>
          <Title className={classes.title}>Atomize</Title>
        </Center>
      </Grid.Col>
      <Grid.Col lg={6}>
        <Image
          radius="md"
          src="shorten-removebg.png"
          alt="Loading..."
          fit="contain"
        />
      </Grid.Col>
      <Grid.Col
        span={12}
        sx={(theme) => ({
          flex: 1,
          backgroundColor: theme.colors.gray[4],
        })}
      >
        <UrlShortener />
      </Grid.Col>
    </Grid>
  );
};

export default MainPage;
