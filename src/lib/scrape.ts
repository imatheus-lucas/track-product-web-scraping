import axios from "axios"
import { load } from "cheerio"

export async function scrape(productUrl: string) {
    const response = await axios.get(`http://api.scraperapi.com?api_key=5cf2e29dbf6f8b8b4449df079a53cf94&url=${productUrl}`)
    const $ = load(response.data)

    const title = $('h1.ui-pdp-title').text()
    const price = $('span.andes-money-amount.ui-pdp-price__part.andes-money-amount--cents-superscript.andes-money-amount--compact')
        .find('meta')
        .attr('content')

    const image = $('img.ui-pdp-image.ui-pdp-gallery__figure__image').attr('src')!

    const description = $('p.ui-pdp-description__content').text()

    const currentPrice = Number(price)
    return {
        title,
        image,
        description,
        price: currentPrice
    }
}