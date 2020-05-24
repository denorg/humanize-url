# 🔗 Humanize URL

Humanize a URL in Deno https://yogi.codes → yogi.codes/

[![Test CI](https://github.com/denorg/humanize-url/workflows/Test%20CI/badge.svg)](https://github.com/denorg/humanize-url/actions)

```ts
import { humanizeUrl, validURL } from "https://raw.githubusercontent.com/denorg/humanize-url/master/mod.ts";

await humanizeUrl('https://yogi.codes');
//=> 'yogi.codes'

await validURL('https://yogi.codes');
//=> true
```

Alternatively, you can use it directly from the CLI by using deno run:

```bash
deno run https://raw.githubusercontent.com/denorg/humanize-url/master/cli.ts <url>
```

You can also install it globally using the following:

```bash
deno install -n humanize-url https://raw.githubusercontent.com/denorg/humanize-url/master/cli.ts
```

Then, the package is available to run:

```bash
humanize-url <url>
```

## 👩‍💻 Development

Run tests:

```bash
deno test
```

## 📄 License

MIT © [Denorg](https://den.org.in)
