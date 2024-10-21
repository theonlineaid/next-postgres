import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma


// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// Or

// import { PrismaClient } from '@prisma/client';
// const client = (globalThis as any).prisma || new PrismaClient();
// if (process.env.NODE_ENV !== 'production') (globalThis as any).prisma = client;
// export default client;