'use client'
import { updatedTracking } from "@/lib/actions/web-scraping";
import { Button } from "./ui/button";


type TrackButtonProps = {
    productId: string
    tracking: boolean
}

export function TrackButton({ productId, tracking }: TrackButtonProps) {
    return (
        <Button onClick={() => updatedTracking(productId, !tracking)}>
            {tracking ? "Traking" : "Track"}
        </Button>
    )
}