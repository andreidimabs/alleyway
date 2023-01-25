import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../images/logo.jpg";
import Product from "components/product";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <header className="bg-[#f36d22]">
          <nav>
            <Link href={"/"}>
              <h1 className="logo">
                <Image src={logo} />
              </h1>
            </Link>
          </nav>
        </header>
        <main className="">
          <Product />
        </main>
      </div>
    </>
  );
};

export default Home;
