const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  try {
    await page.goto('https://educa-front.vercel.app/');
    await page.waitForTimeout(1000);

    await page.type('input[type="email"]', 'teste');
    await page.waitForTimeout(1000);

    await page.type('input[type="password"]', 'teste8231@@');
    await page.waitForTimeout(3000);

    await page.click('button[type="submit"]');

    await page.waitForNavigation({ waitUntil: 'domcontentloaded' });

  } catch (error) {

  } finally {
    //await browser.close();
  }
})();
