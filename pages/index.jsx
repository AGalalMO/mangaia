import HomeScreen from "~/components/HomeScreen";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  return <HomeScreen />;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
  },
});

export default Home;
