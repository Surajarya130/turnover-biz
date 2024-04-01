"use client";

import React from "react";
import { Checkbox } from "./ui/checkbox";
import { CheckListsType } from "@/types";
import { addChecked } from "@/lib/actions/user.action";

const CheckList: React.FC<{ item: CheckListsType }> = ({ item }) => {
  const handleChecked = async (checkedItem: string, isChecked: boolean | string) => {
    if (isChecked) {
      // Add data to category item
      console.log("added", checkedItem);
      const addedBox = await addChecked(checkedItem);
      console.log(addedBox);
    } else {
      // remove from db
      console.log("removed", checkedItem);
    }
  };
  return (
    <div className="mb-4 flex space-x-2" key={item.id}>
      <Checkbox
        id={item.value}
        onCheckedChange={(isChecked) => {
          handleChecked(item.value, isChecked);
        }}
      />
      <label
        htmlFor={item.value}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {item.title}
      </label>
    </div>
  );
};

export default CheckList;
