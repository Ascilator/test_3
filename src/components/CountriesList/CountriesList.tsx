"use client";
import React, { useEffect, useState } from "react";

import { ListNames, ListType } from "@/types";
import { useScroll } from "@/hooks";

import { CountryItem } from "../CountryItem";
import { Button } from "../Button";

type CountriesListProps = {
  listsData: {
    [key in ListNames]: ListType[];
  };
};

export const CountriesList: React.FC<CountriesListProps> = ({ listsData }) => {
  const [list, setList] = useState<ListType[]>(listsData.countriesList);
  const [listName, setListName] = useState<ListNames>(ListNames.countriesList);
  const { visibleItems } = useScroll();

  const handleClick = () => {
    if (listName === ListNames.countriesList) {
      setListName(ListNames.currencyList);
    } else {
      setListName(ListNames.countriesList);
    }
  };

  useEffect(() => {
    setList(listsData[listName]);
  }, [listName]);

  const renderedList = list
    .slice(0, visibleItems)
    .map(({ title, list }) => (
      <CountryItem key={title} title={title} list={list} listName={listName} />
    ));

  return (
    <div>
      <div className="flex justify-center py-5">
        <Button text="Switch list" onClick={handleClick} />
      </div>
      <div>{renderedList}</div>
    </div>
  );
};
