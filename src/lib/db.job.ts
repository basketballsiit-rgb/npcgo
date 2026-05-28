import { PrismaClient } from '../../prisma/generated/client-job';

const globalForPrisma = global as unknown as { prismaJob: PrismaClient };

export const dbJob =
  globalForPrisma.prismaJob ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaJob = dbJob;
