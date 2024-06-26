import Image from "next/image";
import main_hero_bg_test from "../../../../public/assets/images/main_hero_bg_test.webp";
import constants from "@/utils/constants/constans.json";

const HeroImage = () => {
  return (
    <Image
      src={main_hero_bg_test}
      alt={`Main Page Hero Background Image | ${constants.aria_label}`}
      title={`Main Page Hero Background Image | ${constants.aria_label}`}
      fill
      className="object-cover center"
      placeholder="blur"
      priority
      quality={20}
    />
  );
};

export default HeroImage;
