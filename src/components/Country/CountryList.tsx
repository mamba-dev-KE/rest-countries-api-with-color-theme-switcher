import { useCountries } from 'hooks';

type Props = {};

const CountryList = (props: Props) => {
  const { data: countries } = useCountries();

  return (
    <section>
      <pre>{JSON.stringify(countries, null, 2)}</pre>
    </section>
  );
};

export default CountryList;
