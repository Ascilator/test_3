export type Country = {
  name: string;
  population: number;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
};

export type ListType = {
  title: string;
  list: string[];
};

export type CountryReduced = ListType & {
  population: number;
};

export enum ListNames {
  countriesList = "countriesList",
  currencyList = "currencyList",
}

export enum ButtonStatus {
  NotActive,
  Active,
  Loading,
}
