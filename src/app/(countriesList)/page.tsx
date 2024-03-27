import { CountriesList } from "@/components/CountriesList";
import { Country, ListNames, ListType } from "@/types";

const getCountries = async (): Promise<{
  countries: ListType[];
  currencies: ListType[];
}> => {
  const response = await fetch("https://restcountries.com/v2/all");
  const data: Country[] = await response.json();
  const countries = data.map((country) => {
    const { name, currencies, population } = country;
    const currencyNames = currencies?.map((currency) => currency.name) || [];
    return { title: name, list: currencyNames, population };
  });

  const currenciesObject = countries.reduce<{
    [key: string]: string[];
  }>((acc, item) => {
    item.list?.map((curr) => {
      if (!acc[curr]) {
        acc[curr] = [item.title];
      } else {
        acc[curr] = [...acc[curr], item.title];
      }
    });

    return acc;
  }, {});

  const currencies = Object.entries(currenciesObject).map((currency) => {
    return {
      title: currency[0],
      list: currency[1],
    };
  });

  return { countries, currencies };
};

export default async function listPage() {
  const { countries, currencies } = await getCountries();

  return (
    <div className="max-w-5xl mx-auto px-5">
      <CountriesList
        listsData={{
          [ListNames.countriesList]: countries,
          [ListNames.currencyList]: currencies,
        }}
      />
    </div>
  );
}
