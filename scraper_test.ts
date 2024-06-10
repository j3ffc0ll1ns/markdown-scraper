
import { assert } from "jsr:@std/assert";
import { scrape } from "./mod.ts";


Deno.test(async function scrapeTest() {
    const targetUrl = "https://en.wikipedia.org/wiki/Web_server_directory_index";
    const content = await scrape(targetUrl);
    assert(content.startsWith("Title: Web server directory index"))
});
