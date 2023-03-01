import Layout from "components/Layout/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import { dataExplores } from "utils/data/explore";
import { ExploreHero } from "views/pages/explores";

const ExploreDetail = () => {
  const [headerReveal, setReveal] = useState(false);
  const router = useRouter();
  const data = dataExplores.find((item) => {
    return item.slug === router.query.slug;
  });
  const dataHero = data?.hero;
  const dataFirstContent = data?.contents["first"];
  const dataSecondContent = data?.contents["second"];
  const dataThirdContent = data?.contents["third"];
  const dataFourthContent = data?.contents["fourth"];
  const dataFifthContent = data?.contents["fifth"];

  const dataContents = {
    first: dataFirstContent,
    second: dataSecondContent,
    third: dataThirdContent,
    fourth: dataFourthContent,
    fifth: dataFifthContent,
  };

  return (
    data && (
      <Layout
        head={{
          title: `${dataHero.label} - Explore`,
          description: `${dataHero.label} - Explore`,
        }}
        header={{
          reveal: true,
          color: "#8b6e4b",
          centerLogo: true,
        }}
        footer
      >
        <ExploreHero hero={dataHero} content={dataContents} />
      </Layout>
    )
  );
};

export default ExploreDetail;
