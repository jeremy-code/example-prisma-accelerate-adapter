import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [],
});
