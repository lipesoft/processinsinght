import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createAudit(req, res) {
  const { title, department, responsible, date } = req.body;

  const audit = await prisma.audit.create({
    data: {
      title,
      department,
      responsible,
      date: new Date(date)
    }
  });

  res.json(audit);
}

export async function getAudits(req, res) {
  const audits = await prisma.audit.findMany();
  res.json(audits);
}