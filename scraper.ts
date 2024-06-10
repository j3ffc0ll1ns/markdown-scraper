const JINA_AI_URL_SCRAPE_TEMPLATE = 'https://r.jina.ai/{URL}';

/**
 * Scrapes the given URL and returns the scraped content as Markdown using Jina AI.
 * @see https://jina.ai/
 *
 * @param url The URL to scrape.
 * @returns The scraped content as Markdown.
 */
export const scrape = (url: string):  string => JINA_AI_URL_SCRAPE_TEMPLATE.replace('{URL}', url);

