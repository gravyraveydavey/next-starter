import Img from "@/components/elements/Img";
import Overlay from "@/components/elements/Overlay";

const BackgroundImage = ({ overlayStrength, parallax, src }) => {
  return (
    <>
      <Img
        parallax={parallax}
        src={src}
        className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover"
      />
      <Overlay strength={overlayStrength} />
    </>
  );
};

export default BackgroundImage;
