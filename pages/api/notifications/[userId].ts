import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const { userId } = req.query;
    const userIdNumber = Number(userId);

    if (!userIdNumber || typeof userIdNumber !== "number") {
      throw new Error("Invalid ID");
    }

    const notifications = await prisma.notification.findMany({
      where: {
        userId: userIdNumber,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    await prisma.user.update({
      where: {
        id: userIdNumber,
      },
      data: {
        hasNotification: false,
      },
    });

    return res.status(200).json(notifications);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
