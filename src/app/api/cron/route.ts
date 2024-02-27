


import prisma from '@/lib/prisma';
import { scrape } from '@/lib/scrape';
import { getAveragePrice, getHighestPrice, getLowestPrice } from '@/lib/utils';
import { NextResponse } from 'next/server';
export const dynamic = "force-dynamic";
export const revalidate = 0;
export async function GET() {
    const products = await prisma.products.findMany({
        where: {
            tracking: true,
        },
        include: {
            product_history: true
        }
    });

    if (products.length <= 0) {
        return NextResponse.json({
            message: "Not product to tracking"
        })
    }

    await Promise.all(
        products.map(async (product) => {
            const { price } = await scrape(product.url)

            await prisma.products.update({
                data: {
                    currentPrice: price,
                    lowestPrice: getLowestPrice(product.product_history),
                    averagePrice: getAveragePrice(product.product_history),
                    highestPrice: getHighestPrice(product.product_history),
                    product_history: {
                        create: {
                            price,
                        }
                    }
                },
                where: {
                    id: product.id
                }
            })

        })
    )

    return NextResponse.json({
        message: 'OK'
    })
}