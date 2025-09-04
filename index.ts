import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Dodanie zadania
  await prisma.task.create({
    data: { title: "Pierwsze zadanie w Prisma 🚀" },
  });

  // Pobranie wszystkich zadań
  const tasks = await prisma.task.findMany();
  console.log(tasks);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
