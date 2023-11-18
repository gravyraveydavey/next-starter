import Image from "next/image";
import { imageContextMap } from "@/config/imageContextMap";
import { removeFalsyFromObject } from "@/helpers/removeEmptyFromObject";
import getClassString from "@/helpers/getClassString";
const Img = (
  {
    parallax,
    context,
    className,
    fluid = true,
    fill,
    src = "",
    alt = "",
    ...props
  },
  forwardRef
) => {
  // filter empty stuff from remaining attributes
  const imgProps = removeFalsyFromObject(props);

  // assign required classes
  const classes = ["image", fluid ? "img-fluid" : "", className];

  let contextMap = {};

  // determine our image width, height and sizes attributes from the context lookup map
  if (Object.keys(imageContextMap).indexOf(context) >= 0) {
    contextMap = imageContextMap[context];
  }
  //console.log( 'context', context, contextMap )
  // merge image props into the context map so that they can override the defaults if desired
  const imgAttrs = { ...contextMap, ...imgProps };

  // hijack the nextJS fill treatment in place of our utility classes
  if (fill) {
    // imgAttrs.fill = false;
    classes.push("w-100 h-100 position-absolute object-fit-cover top-0 left-0");
  }
  // if no valid image was provided then display a placeholder
  const imgSrc = src ? src : "/placeholder.jpg";

  return (
    <Image
      {...imgAttrs}
      src={imgSrc}
      alt={alt}
      ref={forwardRef}
      className={getClassString(classes)}
      //className={ `v-image ${className}` }
    />
  );
};

export default Img;
