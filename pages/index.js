import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Features from "../src/components/Features";
import Home from "../src/components/Home";
import Partners from "../src/components/Partners";
import Portfolio from "../src/components/Portfolio";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
// import Testimonials from "../src/components/Testimonials";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import Mouse from "../src/layouts/Mouse";
import ScrollTop from "../src/layouts/ScrollTop";
import { useState, useEffect } from "react";
const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Index = () => {
  const [user, setUser]=useState({});
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        console.log("service response is",res);
        if(!res.ok){
          throw new Error('Failed to fetch data');
        }
        const data= await res.json();
        console.log("data is", data);
        setUser(data.user);
        // console.log("service data is", serviceData);
      }
      catch(error){
        console.log("Error during fetching the data",error)
      }
    }
    fetchData()
  },[])

  return (
    
    <>
    {user &&  
    <Layout>
      <Head>
        <title>Devman | Home</title>
      </Head>
      <MobileHeader />
      <Header />
      {user.about && <Home homeData={user.about}/> }      
      <Features />
      {user.about && <About about={user.about} skills={user.skills}/> }      
      <CounterSection />
      {user.projects && <Portfolio projects={user.projects}/> }     
      {user.skills && <Skills skills={user.skills}/> }         
      {user.services && <Service services={user.services}/> }      
      <Process />
      {user.testimonials && <Testimonials testimonials={user.testimonials}/> }      
      <Partners />
      <Contact />
      <Blog />
      {user.social_handles && <Copyright social_handles={user.social_handles}/>}
      
      <Mouse />
      <ScrollTop />
    </Layout>
    }
    </>
  );
};
export default Index;
