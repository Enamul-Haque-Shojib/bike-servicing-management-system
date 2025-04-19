/*
  Warnings:

  - Changed the type of `status` on the `services` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ServiceStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "services" DROP COLUMN "status",
ADD COLUMN     "status" "ServiceStatus" NOT NULL;
