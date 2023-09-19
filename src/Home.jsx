import React from "react";
import Banner from './components/Banner';
import Header from "./Header";
import Footer from "./components/Footer";
import Content from "./components/content";
export default function Home() {
    return (
      <>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </>
     
    );
  }