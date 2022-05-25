import { Button, Center, createStyles, Group, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import useFetch from "use-http";
import urlSchema from "../schemas/url.schema";
interface UrlData {
  url: string;
}
function UrlShortener() {
  const form = useForm<UrlData>({
    initialValues: {
      url: "",
    },
    schema: zodResolver(urlSchema),
  });

  const { error, post, loading, response } = useFetch(
    process.env.REACT_APP_serveruri
  );
  async function handleShorten(data: UrlData) {
    await post("/api/shorten");
    if (response.ok) return;
  }
  return (
    <Center sx={() => ({ height: "100%" })}>
      <form onSubmit={form.onSubmit((values) => handleShorten(values))}>
        <TextInput
          size="lg"
          placeholder="Enter your url"
          {...form.getInputProps("url")}
        />
        <Center>
          <Group position="center" mt="md">
            <Button type="submit">Shorten</Button>
          </Group>
        </Center>
      </form>
    </Center>
  );
}

export default UrlShortener;
