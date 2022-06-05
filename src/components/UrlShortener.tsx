import {
  Button,
  Center,
  createStyles,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import useFetch from "use-http";
import urlSchema from "../schemas/url.schema";
interface UrlData {
  url: string;
}
type Short = string | null;
const useStyles = createStyles((theme) => ({
  urlForm: {
    width: "50%",
  },
  button: {
    backgroundColor: theme.colors.accent[0],
    "&:hover": { backgroundColor: theme.colors.accent[1] },
  },
}));
function UrlShortener() {
  const [short, setShort] = useState<Short>(null);
  const { classes } = useStyles();
  const form = useForm<UrlData>({
    initialValues: {
      url: "",
    },
    schema: zodResolver(urlSchema),
  });

  const { error, post, loading, response } = useFetch(
    `${process.env.REACT_APP_serveruri}/v1`
  );
  async function handleShorten(data: UrlData) {
    setShort(null);
    await post("/url/shorten", data);
    if (response.ok) return setShort(response.data.short);
    form.setFieldError("url", "something went wrong");
  }
  return (
    <Center sx={() => ({ height: "100%", width: "100%" })}>
      <form
        className={classes.urlForm}
        onSubmit={form.onSubmit((values) => handleShorten(values))}
      >
        <TextInput
          size="xl"
          placeholder="Enter your url"
          {...form.getInputProps("url")}
        />
        <Center>
          <Group position="center" mt="md">
            <Button size="lg" className={classes.button} type="submit">
              Shorten
            </Button>
          </Group>
        </Center>
        <Center mt="md">
          {short && (
            <Text size="xl" sx={(theme) => ({ color: theme.colors.accent[0] })}>
              Your Shortened link:{" "}
              {`${process.env.REACT_APP_serveruri}/${short}`}
            </Text>
          )}
        </Center>
      </form>
    </Center>
  );
}

export default UrlShortener;
