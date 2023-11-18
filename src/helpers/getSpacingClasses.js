import spacings from '@/config/spacings'

export function getSpacingClasses(lookup) {
  if (lookup in spacings) {
    return spacings[lookup];
  } else if (lookup.includes(" ")) {
    const lookupParts = lookup.split(" ");
    let spacingClasses = [];
    lookupParts.map((lookupPart) => {
      if (lookupPart in spacings) {
        spacingClasses.push(spacings[lookupPart]);
      }
    });
    return spacingClasses.join(" ");
  } else {
    throw new Error(
      `invalid spacing lookup ${lookup} - check index exists in spacings object in src/helpers/spacings.js`
    );
  }
}
