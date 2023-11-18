import Img from "@/components/elements/Img";
import Section from "@/components/elements/Section";
const WysiwygMedia = ({
  children,
  className = "",
  spacing = "md",
  image,
  order = "content-media",
  ...props
}) => {
    const mediaOrderClass =
    order == "media-content" ? "order-0 mb-4 mb-md-0" : "";
  const contentOrderClass =
    order == "media-content" ? "order-1" : "mb-4 mb-md-0";
  const contentAosDelay = order == "media-content" ? "1" : "0";
  const mediaAosDelay = order == "media-content" ? "0" : "1";

  return (
    <Section
      {...props}
      spacing={spacing}
      className={`wysiwyg-media v-mdu position-relative overflow-hidden ${className}`}
    >
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div
          className={`col-12 col-md-6 ${contentOrderClass} v-from-wysiwyg`}
          data-aos="fade-up"
          data-aos-delay-md={contentAosDelay}
        >
          {children}
        </div>
        <div
          className={`col-12 col-md-6 ${mediaOrderClass}`}
          data-aos="fade-up"
          data-aos-delay-md={mediaAosDelay}
        >
          <Img {...image} className={"w-100 h-auto img-fluid"}
          context="wysiwyg-media"

          />
        </div>
      </div>
    </div>
    </Section>
  );
};
export default WysiwygMedia;
