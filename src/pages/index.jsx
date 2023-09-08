import { Inter } from 'next/font/google'
import Layout from "../components/Layout";
import NavBar from '@/components/NavBar';
import Hero from "../sections/Home/Hero";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <Layout></Layout>

  );
}
  