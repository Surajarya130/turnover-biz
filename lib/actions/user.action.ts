import prisma from "@/prisma";

// getAll User
export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch all users");
  }
};

export const addChecked = async (checkedItem: string) => {
  console.log(checkedItem);
  const userId = 123;
  const addedData = await prisma.user.update({
    where: { id: userId },
    data: {
      categories: {
        push: checkedItem,
      },
    },
  });

  return addedData;
};

export const getAllCategories = async () => {
  try {
    const allCats = await prisma.category.findMany();
    return allCats;
  } catch (error) {
    throw new Error("Error found");
  }
};
