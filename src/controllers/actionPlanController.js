import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createPlan(req, res) {
  const { title, status, responsible, dueDate } = req.body;

  const plan = await prisma.actionPlan.create({
    data: {
      title,
      status,
      responsible,
      dueDate: new Date(dueDate)
    }
  });

  res.json(plan);
}

export async function getPlans(req, res) {
  const plans = await prisma.actionPlan.findMany();
  res.json(plans);
}