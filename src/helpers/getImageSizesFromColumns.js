/**
 * getImageSizesFromColumns
 *
 * Returns a string of image sizes (used in SrcSet) from an input of bootstrap column classes
 */
export const getImageSizesFromColumns = ( breakpoints ) => {

    //console.log( 'generating image sizes from column classes', breakpoints );

    // convenience helper for reformatting a class string to an array of breakpoints
    if ( typeof( breakpoints ) == 'string' ){
        breakpoints = colClassesToObject( breakpoints );
    }

    // output string
    let sizes_string = '';

    const params = {
        'gutter': 16,
        // bootstrap min-width media query breakpoint vals (in px)
        'media_query_min_widths': {
            'xs': 0,
            'sm': 540,
            'md': 720,
            'lg': 960,
            'xl': 1140,
        },
        // bootstrap max container size vals (in px)
        'max_container_sizes': {
            'xs': 100,
            'sm': 576,
            'md': 768,
            'lg': 992,
            'xl': 1200,
        },
    }

    if ( Object.keys( breakpoints ).length ){

        // force an XS size if one wasn't specified, assuming full width
        if ( ! breakpoints?.xs ) breakpoints.xs = 12

        //console.log( 'using breakpoint', breakpoints );
        // ensure the breakpoints are in the desired order (large to small)
        const breakpoint_order = {
            'xl': 0,
            'lg': 0,
            'md': 0,
            'sm': 0,
            'xs': 0
        }
        breakpoints = Object.assign( breakpoint_order, breakpoints );
        //console.log( 'reordered breakpoints', breakpoints );

        // loop the array and build the output string
        for (let [breakpoint, col_width] of Object.entries( breakpoints )) {

            // ensure its a valid number so we can do math on it
            col_width = parseInt( col_width );

            // dont bother outputting anything with a 0 value (no width) or if its a bad size breakpoint
            if ( col_width && Object.keys( params.media_query_min_widths ).indexOf( breakpoint ) >= 0 ){

                if ( breakpoint == 'xs' ){
                    // for XS breakpoint use a VW based calculation (from 100%)
                    const image_max_size = `calc( ${ Math.floor( ( 100 * ( col_width / 12 ) ) ) } vw - ${ ( params.gutter * 2 ) }w )`;
                    sizes_string += image_max_size;
                } else {
                    // for everything else use a calculation from the max container size in px
                    const image_max_size = `${ Math.floor( ( ( params.media_query_min_widths[ breakpoint ] / 12 ) * col_width ) - ( params.gutter * 2 ) ) }w, `;
                    sizes_string += `(min-width: ${ params.max_container_sizes[ breakpoint ] }px) ${image_max_size}`;
                }
            }
        }

    }
    //console.log( 'final sizes string!', sizes_string );
    return sizes_string;


}

// takes a string of classes, strips out any bootstrap cols and formats them into an array of [breakpoint] => [col_width]
const colClassesToObject = ( classes_string ) => {
    const breakpoints = {}
    //console.log( 'running col class to object helper', classes_string )

    const matches = [ ...classes_string.matchAll( /col(-|)(\w{1,2}|)-(\d{1,2})/g ) ];

    if ( matches ){
        Object.keys( matches ).forEach( index => {
            const size = matches[ index ][2] ? matches[ index ][2] : 'xs'
            breakpoints[ size ] = matches[ index ][3]
            //console.log( `size was ${size} value was ${matches[ index ][3]}` )
        })
    }
    //console.log( 'final breakpoints were', breakpoints );
    return breakpoints;
}
