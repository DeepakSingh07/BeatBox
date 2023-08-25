import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "../../components/Loader";

function Signin({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  if (session) return <Loader />;

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login to BeatBox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-40 relative">
        <Image
          src="https://bit.ly/40Jf2xp"
          layout="fill"
          objectFit="contain"
          className="animate-pulse"
        />
      </div>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Signin;

export async function getStaticProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}