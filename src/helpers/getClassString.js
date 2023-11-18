/**
 * getClassString
 *
 * Returns a sanitised class string from the suppled classes param for use within an element's
 * className attribute.
 */
const getClassString = (classes) => {
    // @classes can be anything - a string, an object or an array - this helper will convert any
    // format into a string output.
    let classStr = '';

    // We need to handle a whole bunch of possibilities, so first check if it's an object.
    if( ! Array.isArray( classes ) ) {
        Object.keys( classes ).forEach( i => {
            const classesArr = classes[ i ];

            // Ignore the object keys and pass the key value back to this function so we can parse
            // it again.
            classStr += getClassString( classesArr );
        });
    } else if( classes.length ) {
        classes.forEach( classesStr => {
            let string = '';

            if( Array.isArray( classesStr ) ) {
                // If the values are an array then pass it back through this function so we can
                // eventually drill down to the string
                string = getClassString( classesStr );
            } else {
                // This is the final step - all supplied classes should be accessible as a string at
                // this point.
                string = classesStr;
            }

            classStr += string && string.length ? ( classStr.length ? ' ' : '' ) + string : '';
        });
    }

    // Sanitise the class string so we don't end or start with a space
    return classStr.trim();
}

export default getClassString;
