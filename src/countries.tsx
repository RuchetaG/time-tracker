import { countries } from "countries-list";

export const COUNTRIES: Option[] = Object.entries(countries).map(
  ([key, value]) => ({
    label: value.name,
    value: key.toLowerCase(),
    data: { ...value, code: key.toLowerCase() },
  })
);

export interface Option {
  label: string;
  value: string | boolean;
  data: any;
  isDisabled?: boolean;
}
export default COUNTRIES;
