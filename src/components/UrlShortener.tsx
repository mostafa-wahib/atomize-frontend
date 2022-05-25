import { Center, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
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
  function handleShorten(data: UrlData) {}
  return (
    <>
      <Center>
        <form onSubmit={form.onSubmit((values) => handleShorten(values))}>
          <TextInput
            size="lg"
            placeholder="enter your url"
            {...form.getInputProps("url")}
          ></TextInput>
        </form>
      </Center>
    </>
  );
}

export default UrlShortener;
