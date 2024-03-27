import { ButtonStatus, ListNames } from "@/types";
import { useEffect, useState } from "react";

export const useListItem = ({
  title,
  listName,
}: {
  title: string;
  listName: ListNames;
}) => {
  const [status, setStatus] = useState(ButtonStatus.Loading);

  const getListFromLS = (): string[] =>
    JSON.parse(localStorage.getItem(listName) ?? "[]");

  useEffect(() => {
    if (getListFromLS().includes(title)) {
      setStatus(ButtonStatus.Active);
    } else {
      setStatus(ButtonStatus.NotActive);
    }
  }, []);

  const handleClick = () => {
    if (status === ButtonStatus.Active) {
      setStatus(ButtonStatus.NotActive);
    } else {
      setStatus(ButtonStatus.Active);
    }

    const activeList = getListFromLS();
    let newActiveList = [];

    if (status === ButtonStatus.NotActive) {
      newActiveList = [...activeList, title];
    } else {
      newActiveList = activeList.filter((item) => item !== title);
    }

    localStorage.setItem(listName, JSON.stringify(newActiveList));
  };

  return { status, handleClick };
};
