const Overlay = ({ strength = "strong" }) => {
    // for purgeCSS - v-overlay-light v-overlay-medium v-overlay-strong v-overlay-opaque
    return (
      <div
        className={`v-overlay position-absolute w-100 h-100 top-0 left-0 v-overlay-${strength}`}
      ></div>
    );
  };
  export default Overlay;
