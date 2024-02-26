import { ProductHistory } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getLowestPrice(historic: ProductHistory[]): number {
  let lowestPrice: number = historic[0].price;

  for (const entry of historic) {
    if (entry.price < lowestPrice) {
      lowestPrice = entry.price;
    }
  }

  return lowestPrice;

}

export function getAveragePrice(historic: ProductHistory[]): number {
  let totalPrices = 0;

  for (const entry of historic) {
    totalPrices += entry.price;
  }

  const averagePrice = totalPrices / historic.length;

  return averagePrice;
}

export function getHighestPrice(historic: ProductHistory[]): number {
  let highestPrice: number = historic[0].price;

  for (const entry of historic) {
    if (entry.price > highestPrice) {
      highestPrice = entry.price;
    }
  }

  return highestPrice;
}
