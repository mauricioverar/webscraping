import puppeteer from "puppeteer"

;(async () => {
  // Inicie el navegador y abra una nueva página en blanco.
  // const browser = await puppeteer.launch()

  // nueva forma
  const browser = await puppeteer.launch({ headless: "new" })
  // const browser = await puppeteer.launch({ headless: false }) // abre el navegador y hace operacion
  // const browser = await puppeteer.launch({ headless: true }) // no abre el navegador y hace operacion

  const page = await browser.newPage()

  // Navegar por la página a una URL ej https://developer.chrome.com/
  // await page.goto("https://www.google.cl/")
  // await page.goto("https://developer.chrome.com/")
  await page.goto("https://www.amazon.es/") // aveces cokies, otras imagen

  // Establecer tamaño de pantalla
  await page.setViewport({ width: 1080, height: 1024 })

  // captura de pantalla
  // await page.screenshot({ path: 'amazon1.jpg' })
  // await page.screenshot({ path: "chrome8.jpg" })

  // Escribe en el cuadro de búsqueda
  // await page.type("#APjFqb", "automate beyond recorder")
  // await page.type(".search-box__input", "automate beyond recorder")
  await page.type("#twotabsearchtextbox", "libros de javascript") // acá se cae aveces por uso de cokies
  // await page.screenshot({ path: "amazon16.jpg" })

  //Espere y haga clic en el primer resultado.
  // const searchResultSelector = ".search-box__link"
  // await page.waitForSelector(searchResultSelector) // data-component-type="s-search-result"
  // await page.click('.gNO89b')

  await page.click(".nav-search-submit input")
  await page.waitForSelector("[data-component-type=s-search-result]") // esperar la carga del componente
  await page.screenshot({ path: "amazon18.jpg" })
  // await page.wait(3000) // esperar 3 segundos // obsoleto
  const enlaces = await page.evaluate(() => {
    const elements = document.querySelectorAll(
      "[data-component-type=s-search-result] h2 a"
    )

    const links = []
    for (let element of elements) {
      links.push(element.href)
    }
    return links
  })
  console.log(enlaces.length) // numero de enlaces ej: 20

  const books = []
  for (let enlace of enlaces) {
    await page.goto(enlace)
    // await page.waitForDevicePrompt(1000) // waitFor
    await page.waitForSelector("#productTitle")

    const book = await page.evaluate(() => {
      const tmp = {}
      tmp.title = document.querySelector("#productTitle").innerHTML
      tmp.author = document.querySelector(".author a").innerHTML
      return tmp
    })
    books.push(book)
  }
  console.log(books)

  // await page.click(searchResultSelector)
  // await page.waitForSelector(searchResultSelector)

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
