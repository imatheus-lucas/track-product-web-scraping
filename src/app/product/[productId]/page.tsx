import { TrackButton } from "@/components/track-button";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/actions/web-scraping";
import { BookmarkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

type PorudtcProps = {
    params: {
        productId: string
    }
}

export default async function Product({ params: { productId } }: PorudtcProps) {
    const product = await getProductById(productId)

    if (!product) {
        return null;
    }

    const productFormatted = {
        ...product,
        currentPrice: product?.currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        lowestPrice: product?.lowestPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        highestPrice: product?.highestPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        averagePrice: product?.averagePrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
    return (
        <main className="h-screen w-screen container">
            <section className="flex gap-8 justify-between ">
                <div className="h-[500px] border rounded-md w-full flex items-center justify-center">
                    <Image className="rounded-md   object-cover" src={productFormatted.image} alt="logo" width={400} height={400} />
                </div>
                <div className="flex flex-col gap-4 h-[500px] justify-between">
                    <h2>
                        {productFormatted.title}
                    </h2>
                    <a href={productFormatted.url} target="_blank" className="text-xs text-muted-foreground">Visit Product</a>
                    <div>
                        <Button variant="secondary">
                            <BookmarkIcon className="h-5 w-5 text-primary" />
                        </Button>
                    </div>
                    <div className="w-full h-px bg-gray-300"></div>

                    <span className="text-lg font-bold py-4">{productFormatted.currentPrice}</span>

                    <div className="w-full h-px bg-gray-300"></div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="bg-primary-foreground p-2 rounded-md">
                            <span className="text-xs">Current Price</span>
                            <p className="text-lg font-bold">{productFormatted.currentPrice}</p>
                        </div>
                        <div className="bg-primary-foreground p-2 rounded-md">
                            <span className="text-xs">Average Price</span>
                            <p className="text-lg font-bold">{productFormatted.averagePrice}</p>
                        </div>
                        <div className="bg-primary-foreground p-2 rounded-md">
                            <span className="text-xs">Highest Price</span>
                            <p className="text-lg font-bold">{productFormatted.highestPrice}</p>
                        </div>
                        <div className="bg-primary-foreground p-2 rounded-md">
                            <span className="text-xs">Lowest Price</span>
                            <p className="text-lg font-bold">{productFormatted.highestPrice}</p>
                        </div>
                    </div>
                    <TrackButton productId={productFormatted.id} tracking={productFormatted.tracking} />
                </div>
            </section>
            <section>
                <h2 className="text-lg font-bold py-4">Product Description</h2>
                <p className="text-sm leading-relaxed">
                    {productFormatted.description}
                </p>
            </section>
        </main >
    )
}