import { useMemo } from "react";
import seedrandom from "seedrandom";
import { Country } from "../domain/countries";
import { countriesWithSlogan, getSlogan } from "../domain/slogans";

const forcedCountries: Record<string, string> = {};

export function useSlogan(dayString: string): [Country, string] {
  const country = useMemo(() => {
    const forcedCountryCode = forcedCountries[dayString];
    const forcedCountry =
      forcedCountryCode != null
        ? countriesWithSlogan.find(
            (country) => country.code === forcedCountryCode
          )
        : undefined;

    return (
      forcedCountry ??
      countriesWithSlogan[
        Math.floor(
          seedrandom.alea(`slagord-${dayString}`)() * countriesWithSlogan.length
        )
      ]
    );
  }, [dayString]);

  const slogan = useMemo(() => getSlogan(country), [country]);

  return [country, slogan];
}
