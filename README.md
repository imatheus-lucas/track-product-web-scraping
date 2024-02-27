# **WebPriceTracker**

WebPriceTrack is an application to monitor products, you can mark a product and it will be monitored and whenever the cronjob is run it will update the price of that product giving an average, highest price and lowest price.

### Instalation & Execution

```bash
#Install dependecies
npm install

#Set variables ambient linux
export SCRAPE_API_KEY=
export DATABASE_URL=

#Set variables ambient windows
set SCRAPE_API_KEY=
set DATABASE_URL=

#Execute prisma
npx prisma generate && npx prisma migrate dev

npm run dev
```

### Screenshots

![track-product-web-scraping.vercel.app_ (1).png](https://github.com/imatheus-lucas/track-product-web-scraping/blob/main/.github/assets/track-product-web-scraping.vercel.app_%20(1).png?raw=true)

![track-product-web-scraping.vercel.app_.png](https://github.com/imatheus-lucas/track-product-web-scraping/blob/main/.github/assets/track-product-web-scraping.vercel.app_.png?raw=true)

![track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4 (2).png](https://github.com/imatheus-lucas/track-product-web-scraping/blob/main/.github/assets/track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4%20(1).png?raw=true)

![track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4 (1).png](https://github.com/imatheus-lucas/track-product-web-scraping/blob/main/.github/assets/track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4%20(2).png?raw=true)

![track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4.png](https://github.com/imatheus-lucas/track-product-web-scraping/blob/main/.github/assets/track-product-web-scraping.vercel.app_product_clt3bfgbk0000jdqiu2ws52d4.png?raw=true)



### License

This project is under license [MIT](./LICENSE).