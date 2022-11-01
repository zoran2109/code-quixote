import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Blog</title>
      <meta name="description" content="Blog created with create-next-app" />
    </Head>
    {children}
  </>
);

export default Layout;
