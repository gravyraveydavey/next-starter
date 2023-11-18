import { getSpacingClasses } from "@/helpers/spacings";

const Container = ({ className = "", spacing = "none", children }) => {
  return (
    <div className={`container ${className} ${getSpacingClasses(spacing)}`}>
      {children}
    </div>
  );
};

export default Container;
