const Home = ({ data }) => {
  return (
    <>
      {!data && <div>Loading...</div>}
      {data && <div>{data.name}</div>}
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(process.env.COUNTRIES_API_URL);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

const getCountries = async () => {
  const res = await fetch(process.env.COUNTRIES_API_URL);
  const data = await res.json();

  return data;
};
