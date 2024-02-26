-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "currentPrice" INTEGER NOT NULL,
    "lowestPrice" INTEGER NOT NULL,
    "highestPrice" INTEGER NOT NULL,
    "averagePrice" INTEGER NOT NULL,
    "tracking" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_products" ("averagePrice", "createdAt", "currentPrice", "description", "highestPrice", "id", "image", "lowestPrice", "title", "updatedAt", "url") SELECT "averagePrice", "createdAt", "currentPrice", "description", "highestPrice", "id", "image", "lowestPrice", "title", "updatedAt", "url" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_url_key" ON "products"("url");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
