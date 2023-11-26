import puppeteer from "puppeteer"

const browser = await puppeteer.launch({
  headless: "new",
  // `headless: true` (default) enables old Headless;
  // `headless: 'new'` enables new Headless;
  // `headless: false` enables “headful” mode.
})

const page = await browser.newPage()
// await page.goto("https://developer.chrome.com/")
await page.goto("https://www.amazon.es/")
    // captura de pantalla
  await page.screenshot({ path: 'amazon2.jpg' })


// …

await browser.close()

/*
 node newHeadless
 
*/