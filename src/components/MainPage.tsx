import { Center, createStyles, Grid, Title, Text } from "@mantine/core";
const useStyle = createStyles((theme) => ({
  wrapper: { alignItems: "stretch", height: "100%" },
}));
function MainPage() {
  const { classes } = useStyle();
  return (
    <Grid className={classes.wrapper}>
      <Grid.Col span={6}>
        <Center>
          <Title order={1}>Shorten.Track.Win</Title>
        </Center>
        <Text size="xl"> Test</Text>
      </Grid.Col>
      <Grid.Col span={6}>Test</Grid.Col>
    </Grid>
  );
}

export default MainPage;
