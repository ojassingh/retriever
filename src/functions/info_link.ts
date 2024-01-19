"use server";

import { PuppeteerWebBaseLoader } from "langchain/document_loaders/web/puppeteer";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import puppeteer from "puppeteer";
import { Builder, By } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

const auth = process.env.AUTH

export async function get_link_cheerio(link: any) {
  const loader = new CheerioWebBaseLoader(link);
  const docs = await loader.load();
  return docs;
}

export async function get_link_pup(link: any) {
  const SBR_WS_ENDPOINT = 'wss://brd-customer-hl_e6683e27-zone-scraping_browser:wqho9cn511ci@brd.superproxy.io:9222';
  let browser;
  browser = await puppeteer.connect({
    browserWSEndpoint: SBR_WS_ENDPOINT
  });
  try {
    const page = await browser.newPage();
    const selector = ".show-more-less-html__markup";
    await page.goto(link, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector(selector);
    const jobDescription = await page.$eval(selector, (e) => e.innerHTML);
    return jobDescription;
  } finally {
    await browser?.close();
  }
}

export async function fuck_around(link: any) {
  let browser
  try {
    browser = await puppeteer.connect({browserWSEndpoint: `wss://${auth}@brd.superproxy.io:9222`})
    // await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    const selector = ".show-more-less-html__markup";
    await page.goto("https://www.linkedin.com/");
    await page.waitForSelector(selector);
    const jobDescription = await page.$eval(selector, (e) => e.innerHTML);
    return jobDescription;
  } finally {
    await browser?.close();
  }
}
