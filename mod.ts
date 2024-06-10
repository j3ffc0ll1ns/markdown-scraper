/**
 * This module provides a `scrape` function that can be used to extract markdown content from web pages using Jina.ai.
 * The `scrape` function takes a URL as input and returns the extracted data in markdown format.
 * @see https://jina.ai/
 * 
 * Example usage:
 * 
 * ```typescript
 * import { scrape } from "@jeff/markdown-scraper";
 * 
 * const url = "https://en.wikipedia.org/wiki/Web_server_directory_index";
 * const data = await scrape(url);
 * console.log(data);
 * // Output (Truncated):
 *  Title: Web server directory index
 * 
 * URL Source: https://en.wikipedia.org/wiki/Web_server_directory_index
 * 
 * Published Time: 2004-02-21T03:00:39Z
 * 
 * Markdown Content:
 * From Wikipedia, the free encyclopedia
 * 
 * [![Image 1](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Www.wikipedia.org_screenshot_2018.png/220px-Www.wikipedia.org_screenshot_2018.png)](https://en.wikipedia.org/wiki/File:Www.wikipedia.org_screenshot_2018.png)
 * 
 * [www.wikipedia.org](https://www.wikipedia.org/), the index of Wikipedia, a multilingual online encyclopedia. Here the website's [home page](https://en.wikipedia.org/wiki/Home_page "Home page") offers many different languages.
 * ...
 * ```
 * 
 * @module mod.ts
 */


export { scrape } from "./scraper.ts";
