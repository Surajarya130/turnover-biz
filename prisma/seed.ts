import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("wallah habibi seeding....");

  for (let index = 0; index <= 50; index++) {
    const title = faker.vehicle.vehicle();
    const user = await prisma.category.createMany({
      data: {
        title,
        value: title.split(" ").join("-"),
      },
    });
    console.log(user);
  }
}

main()
  .catch((e) => {
    console.error("error in seeding", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
