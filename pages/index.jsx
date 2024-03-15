import HomeScreen from "~/src/components/HomeScreen";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "~/src/components/layout";
import axiosInstance from "~/src/utils/axios/axiosInstance";
import { APIS } from "~/src/utils/ServiceUrls";
import { useEffect, useState } from "react";

function Home (props) {
  const [BannerData, setBannerData]=useState([])
  useEffect(async() => {
    const bannerData = await axiosInstance.get(APIS.UTILS.LINKS);
    setBannerData(bannerData?.data)
    
   }, [])
  return (
    <Layout>
      <HomeScreen banners={BannerData} />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) =>
{

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default Home;
