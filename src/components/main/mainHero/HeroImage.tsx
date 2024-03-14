import Image from "next/image";
import main_hero_bg from "../../../../public/assets/images/main_hero_bg.webp";

const HeroImage = () => {
  return (
    <Image
      src={main_hero_bg}
      alt="Main Hero Background"
      fill
      className="object-cover center"
      placeholder="blur"
      priority
      quality={20}
    />
  );
};

export default HeroImage;
