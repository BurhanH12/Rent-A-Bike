import { type Session } from "next-auth";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/global.css";
import Navbar from "~/components/Layout/navbar";
import Footer from "~/components/Layout/footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
    <Head>
        <title>Qsols Rental</title>
        <meta name="description" />
        <link rel="icon" href="/qsol_logo_half.png" />
      </Head>
      
    <SessionProvider session={session}>
      <div>
        <Navbar />
      <Component {...pageProps} />
      <Footer />
      </div>
    </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
