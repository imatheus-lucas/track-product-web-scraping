'use client'
import { webscraping } from "@/lib/actions/web-scraping";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "./spinner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export function SearchBar() {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const isValidMercadoLivreUrl = (url: string) => {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;
        return ['www.mercadolivre.com.br', 'mercadolivre.com.br'].includes(hostname);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = isValidMercadoLivreUrl(search)
        if (!isValid) {
            toast.error("Supported only mercadolivre.com.br", {
                position: "top-right",
                unstyled: false,
                icon: "❌",
                duration: 3000,
                action: {
                    label: "Dismiss",
                    onClick: () => toast.dismiss()
                }
            })
            return;
        }
        try {
            setLoading(true)
            await webscraping(search)
            setSearch("")
            setLoading(false)
        } catch (err) {
            setLoading(false)
            toast.error("Unable to scrape web URL", {
                position: "top-right",
                unstyled: false,
                icon: "❌",
                duration: 3000,
                action: {
                    label: "Dismiss",
                    onClick: () => toast.dismiss()
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap w-full gap-4 mt-12">
            <Input type="url" onChange={(e) => setSearch(e.target.value)} value={search} className="flex-1 min-w-[200px] w-full text-base focus:outline-none " placeholder="Enter product link" />
            <Button type="submit" disabled={!search || loading} className="disabled:opacity-40 min-w-24">
                {loading ? <Spinner /> : "Search"}
            </Button>
        </form>
    )
}