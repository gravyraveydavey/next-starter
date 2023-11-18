export function getColorSchemeClasses(lookup) {
  if (lookup) {
    let classes = `bg-${lookup}`;
    switch (lookup) {
      // dark backgrounds
      case "blue-dark":
      case "blue-bright":
        classes += ` text-white headings-white v-overlay-color-dark`;
        break;
      default:
        // light backgrounds
        classes += ` text-grey-dark headings-blue-bright v-overlay-color-light`;
        break;
    }
    return classes;
  } else {
    throw new Error(
      `invalid color lookup ${lookup} - check index exists in colors object in src/helpers/colors.js`
    );
  }
}
