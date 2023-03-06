import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import { getSession } from "next-auth/react";

export default function Home({
session
}) {
  /* if user is not logged in then we display the login page */
  //if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <Login />
      <main></main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}