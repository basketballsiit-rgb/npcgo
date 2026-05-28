import { PrismaClient } from '../../prisma/generated/client-vehicle';
// Force hot reload 3

const globalForPrisma = global as unknown as { prismaVehicle: PrismaClient | undefined };

// Clear the cached instance so it forces a reload of the new schema
globalForPrisma.prismaVehicle = undefined;

export const dbVehicle =
  globalForPrisma.prismaVehicle ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaVehicle = dbVehicle;
