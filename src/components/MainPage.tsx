import { Center, createStyles, Grid, Title, Text, Image } from "@mantine/core";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UrlShortener from "./UrlShortener";
import classes from "../styles/MainPage.module.scss";
const MainPage: React.FC = () => {
  const user = useContext(UserContext);
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
      <Grid.Col span={12}>
        <UrlShortener />
      </Grid.Col>
    </Grid>
  );
};

export default MainPage;
