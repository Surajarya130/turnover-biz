import CheckList from "@/components/CheckList";
import { getAllCategories, getUsers } from "@/lib/actions/user.action";
import { CheckListsType } from "@/types";

// const checkLists: CheckListsType[] = [
//   {
//     name: "Shoes",
//     value: "shoes",
//     id: 1,
//     isChecked: false,
//   },
// ];

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const users = await getUsers();

  const checkLists: CheckListsType[] = await getAllCategories();

  // const totalItems: number = checkLists.length;
  // const itemsPerPage: number = 6;
  // const noOfPages: number = Math.ceil(totalItems / itemsPerPage);

  // console.log(noOfPages, "searchParams", searchParams);

  // let currentPage: number = 1;

  // if (Number(searchParams.page) >= 1) {
  //   currentPage = Number(searchParams.page);
  //   console.log(currentPage);
  // }

  // const offset = (currentPage - 1) * itemsPerPage;
  // console.log(offset, "offset");

  return (
    <main className="cardBox">
      <div className="pb-4 text-center ">
        <h1 className="pb-6 text-3xl">Please mark your interests!</h1>
        <p className="text-[16px] font-normal">We will keep you notified</p>
      </div>
      <h3 className="pb-3 text-[20px] font-medium">My saved interests!</h3>
      <p className="mb-4">{users[0]?.name}</p>

      {checkLists.map((item) => {
        return <CheckList item={item} key={item.id} />;
      })}
    </main>
  );
}
