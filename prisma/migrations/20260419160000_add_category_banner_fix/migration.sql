/*
  Warnings:

  - Added the required column `category` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "banner" TEXT[],
ADD COLUMN     "category" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Trip_category_idx" ON "Trip"("category");

-- CreateIndex
CREATE INDEX "Trip_slug_idx" ON "Trip"("slug");
