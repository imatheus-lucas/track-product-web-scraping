import { SearchBar } from "@/components/search-bar";
import { getAllProducts } from "@/lib/actions/web-scraping";
import Image from "next/image";
import Link from "next/link";
import Drone from '../assets/drone.svg';
export default async function Home() {

  const products = await getAllProducts()

  return (
    <main className="h-screen w-screen md:container p-4">
      <section className="flex flex-col  justify-center items-center gap-4 md:px-20 ">
        <Image src={Drone} alt="image logo" width={300} height={300} />
        <SearchBar />
      </section>
      {
        products.length > 0 && (
          <section>
            <h1 className="text-2xl font-bold py-10">Trending</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
              {
                products.map((product) => (
                  <Link key={product.id} href={`product/${product.id}`}>
                    <div className="flex flex-col gap-2 items-center p-4 hover:bg-zinc-200 rounded-md">
                      <Image className="rounded-md h-44 w-44 object-contain" src={product.image} alt="logo" width={150} height={150} />
                      <p className="leading-6 truncate font-semibold w-full">{product.title}</p>
                      <p className="text-sm">Price: {product.currentPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div></Link>
                ))
              }
            </div>
          </section>
        )
      }
    </main>

  );
}
