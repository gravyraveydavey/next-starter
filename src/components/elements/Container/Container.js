import { getSpacingClasses } from "@/helpers/getSpacingClasses";

const Container = ({ className = "", spacing = "none", children }) => {
  return (
    <div className={`container ${className} ${getSpacingClasses(spacing)}`}>
      {children}
    </div>
  );
};

export default Container;
