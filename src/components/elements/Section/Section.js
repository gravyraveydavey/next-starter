import Container from "@/components/elements/Container";
import BackgroundImage from "@/components/elements/BackgroundImage";
import { getSpacingClasses } from "@/helpers/getSpacingClasses";
import { getColorSchemeClasses } from "@/helpers/colors";
const Section = ({
  className = "",
  spacing = "",
  contained = false,
  bgColor,
  bgImage,
  overlayStrength,
  children,
  ...props
}) => {
  const colorSchemeClasses = bgColor ? getColorSchemeClasses(bgColor) : "";
  const spacingClasses = spacing ? getSpacingClasses(spacing) : "";
  return (
    <section
      className={`position-relative ${className} ${spacingClasses} ${colorSchemeClasses}`}
    >
      {bgImage && (
        <BackgroundImage
          parallax={parallax}
          src={bgImage}
          overlayStrength={overlayStrength}
        />
      )}
      {children}
    </section>
  );
};

export default Section;
