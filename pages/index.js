import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const getData = async () => {
    const apiKey = "135d7a85d7ea2691bdd2f0bda4fdf4fb"; // Replace with your actual IP stack API key
    const apiUrl = `http://api.ipstack.com/check?access_key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const ipData = response.data;
      console.log({ ipData });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>Next js Project</div>
    </>
  );
}
