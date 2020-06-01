# 🔗 Humanize URL

Humanize a URL in Deno https://yogi.codes → yogi.codes/

[![Deno CI](https://github.com/denorg/humanize-url/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/humanize-url/actions)
[![GitHub](https://img.shields.io/github/license/denorg/humanize-url)](https://github.com/denorg/humanize-url/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/humanize-url)](https://github.com/denorg/humanize-url/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/humanize-url)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ⭐ Getting started

Import the `humanizeUrl` or `validURL` function and use it:

```ts
import { humanizeUrl, validURL } from "https://deno.land/x/humanize_url/mod.ts";

await humanizeUrl('https://yogi.codes');
//=> 'yogi.codes'

await validURL('https://yogi.codes');
//=> true
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx humanize_url https://yogi.codes
# yogi.codes
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run https://deno.land/x/humanize_url/cli.ts https://yogi.codes
# yogi.codes
```

You can also install it globally using the following:

```bash
deno install -n humanize_url https://deno.land/x/humanize_url/cli.ts
```

Then, the package is available to run:

```bash
humanize_url https://yogi.codes
# yogi.codes
```

## 👩‍💻 Development

Run tests:

```bash
deno test
```

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
