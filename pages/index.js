import Login from "@/components/Login";
import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

export default function Home({ session }) {
  
 // console.log(session);
  if(!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />
      <main className="flex">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
  }

export const getServerSideProps = async (context) =>{
  

  return {
      props: {
        session: await getSession(context)
      },

  }
  
}