import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { humanizeUrl } from "./mod.ts";

Deno.test("test humanizeUrl function", async (): Promise<void> => {
  assertEquals(await humanizeUrl('https://yogi.codes'), 'yogi.codes');
});
