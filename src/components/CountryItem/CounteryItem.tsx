"use client";

import { memo } from "react";
import cx from "classnames";

import { ButtonStatus, ListNames } from "@/types";
import { useListItem } from "@/hooks";

import { Button } from "../Button";

type CountryItemProps = {
  title: string;
  list: string[];
  listName: ListNames;
};

export const CountryItem: React.FC<CountryItemProps> = ({
  title,
  list,
  listName,
}) => {
  const { status, handleClick } = useListItem({ title, listName });

  let text = "loading";
  if (status === ButtonStatus.Active) {
    text = "on";
  }
  if (status === ButtonStatus.NotActive) {
    text = "off";
  }

  return (
    <div className="flex justify-between items-start py-3">
      <Button
        className={cx({
          "bg-lime-600 border-lime-600": status === ButtonStatus.Active,
          "bg-gray-600 border-gray-600": status === ButtonStatus.Loading,
        })}
        text={text}
        onClick={handleClick}
      />
      <div className="ml-5 mr-auto mt-3">{title}</div>
      <ul className="flex flex-col gap-3 text-right mt-3">
        {list.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </ul>
    </div>
  );
};

export const MemoCountryItem = memo(CountryItem, (prevProps, nextProps) => {
  if (prevProps.title !== nextProps.title) {
    return false;
  }

  if (prevProps.list.length !== nextProps.list.length) {
    return false;
  }

  if (prevProps.listName !== nextProps.listName) {
    return false;
  }

  return true;
});
