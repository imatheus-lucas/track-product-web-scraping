'use server'
import { revalidatePath } from 'next/cache'
import prisma from '../prisma'
import { scrape } from '../scrape'
import { getAveragePrice, getHighestPrice, getLowestPrice } from '../utils'


export async function webscraping(productUrl: string) {

    const { description, image, price, title } = await scrape(productUrl)


    const existProduct = await prisma.products.findUnique({
        include: {
            product_history: true,
        },
        where: {
            url: productUrl
        }
    })

    if (existProduct) {
        await prisma.products.update({
            data: {
                currentPrice: price,
                lowestPrice: getLowestPrice(existProduct.product_history),
                averagePrice: getAveragePrice(existProduct.product_history),
                highestPrice: getHighestPrice(existProduct.product_history),
                product_history: {
                    create: {
                        price,
                    }
                }
            },
            where: {
                id: existProduct.id
            }
        })
    } else {
        await prisma.products.create({
            data: {
                currentPrice: price,
                lowestPrice: price,
                averagePrice: price,
                highestPrice: price,
                description,
                title,
                url: productUrl,
                image,
                product_history: {
                    create: {
                        price
                    }
                }
            }
        })
    }

    revalidatePath('/')
}

export async function getProductById(productId: string) {
    return await prisma.products.findUnique({ where: { id: productId } })
}

export async function getAllProducts() {
    return await prisma.products.findMany();
}

export async function updatedTracking(productId: string, isTracking: boolean) {
    await prisma.products.update({
        data: {
            tracking: isTracking
        },
        where: {
            id: productId
        }
    })

    revalidatePath(`/product/${productId}`)
}