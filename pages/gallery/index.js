import Layout from "components/Layout/Layout";
import { useState } from "react";
import GalleryHero from "views/pages/gallery/hero";

const Gallery = () => {
  const [headerReveal, setReveal] = useState(false);

  return (
    <Layout
      head={{
        title: "The Gallery",
        description: "The Gallery - Broaden Your Horizon",
      }}
      header={{
        reveal: true,
        color: "#8b6e4b",
        centerLogo: true,
      }}
      footer={{
        style: "-mt-32 xl:-mt-56",
      }}
    >
      <GalleryHero
        hero={{
          label: "the gallery",
          title: "broaden",
          subtitle: "Your Horisonz",
        }}
      />
    </Layout>
  );
};

export default Gallery;
