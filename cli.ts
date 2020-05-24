import { humanizeUrl, validURL } from "./mod.ts";

const cli = async () => {
  if (Deno.args.length) {
    const command = Deno.args[0];
    if (command.length > 0) {
      if (await validURL(command)) {
        console.log(await humanizeUrl(command));
      } else {
        console.log('Invalid URL')
      }
    } else {
      console.log('Usage:\n$ humanize-url <url>');
    }
  } else {
    console.log('Usage:\n$ humanize-url <url>');
  }
}

cli();
