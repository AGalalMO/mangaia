import HomeScreen from "~/src/components/HomeScreen";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home (props) {
  return <HomeScreen />;
}

export const getStaticProps = async ({ locale }) => {
return({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
})};

export default Home;
