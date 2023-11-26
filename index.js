import puppeteer from "puppeteer"

(async () => {
  // Inicie el navegador y abra una nueva página en blanco.
  // const browser = await puppeteer.launch()

  // nueva forma
  const browser = await puppeteer.launch({ headless: "new" })

  const page = await browser.newPage()

  // Navegar por la página a una URL ej https://developer.chrome.com/
  // await page.goto("https://developer.chrome.com/")
  // await page.goto("https://www.amazon.es/")  // aveces cokies, otras imagen
  await page.goto("https://developer.chrome.com/")

  // captura de pantalla
  // await page.screenshot({ path: 'amazon1.jpg' })
  // await page.screenshot({ path: 'amazon3.jpg' })
  // await page.screenshot({ path: "amazon5.jpg" }) // uso de cookies (aceptar)
  // await page.screenshot({ path: "amazon6.jpg" })
  await page.screenshot({ path: "chrome8.jpg" })

  // Establecer tamaño de pantalla
  // await page.setViewport({ width: 1080, height: 1024 })

  // Escribe en el cuadro de búsqueda
  // await page.type(".search-box__input", "automate beyond recorder")

  //Espere y haga clic en el primer resultado.
  /*   const searchResultSelector = ".search-box__link"
  await page.waitForSelector(searchResultSelector)
  await page.click(searchResultSelector)
 */
  // Localice el título completo con una cadena única
  /*   const textSelector = await page.waitForSelector("text/Customize and automate")
  const fullTitle = await textSelector?.evaluate((el) => el.textContent) */

  // Imprimir el título completo
  // console.log('The title of this blog post is "%s".', fullTitle)

  await browser.close()
})()

/*
 node index

*/