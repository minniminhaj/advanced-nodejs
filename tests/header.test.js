const puppeteer = require("puppeteer");

let browser,page;
beforeEach(async ()=>{
    browser = await puppeteer.launch({
    headless: false,
  });
   page = await browser.newPage();
  await page.goto("localhost:3000");
})

test("Launch Browser", async () => {
 const text = await page.$eval('a.brand-logo',el=>el.innerHTML);

 expect(text).toEqual('Blogster');
});

test("sum two numbers", () => {
  const sum = 1 + 2;
  expect(sum).toEqual(3);
});
