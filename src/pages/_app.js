import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />;
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      
    </>
  );
};

export default MyApp;
