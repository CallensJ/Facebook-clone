import Login from "@/components/Login";
import Head from "next/head";
import Header from "../components/Header";
import { useSession, signOut, getSession} from "next-auth/react";

export default function Home({ session }) {
  //const { data: session } = useSession();
  console.log(session);
  if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main></main>
    </div>
  );
  }

export const getServerSideProps = async (context) =>{
  const session = await getSession(context);

  return {
      props: { session },

  }
  
}