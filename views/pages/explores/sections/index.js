import clsx from "clsx";
import Image from "next/image";
import Container from "views/components/container";
import ContentTwoCols from "views/components/content-twocols";
import ContentTwoRowsCols from "views/components/content-tworows-cols";
import HorizontalSlider from "views/components/horizontal-slider";
import {
  ComparisonImage,
  OddImage,
  SingleImage,
} from "views/components/image-container";

const ExploreSections = ({ image = {}, content = {} }) => {
  return (
    <div className="relative w-full -translate-y-32 lg:-translate-y-48">
      <SingleImage className="" content={content.first} />
      <HorizontalSlider images={content.second} />
      {/* <OddImage className="" content={content.second} /> */}
      <SingleImage
        className=" xl:px-32"
        fullwidth={true}
        content={content.third}
      />
      <ComparisonImage className="" content={content.fourth} />
      <SingleImage
        lastSection={true}
        className=" xl:px-32"
        fullwidth={true}
        content={content.fifth}
      />
    </div>
  );
};

export default ExploreSections;
