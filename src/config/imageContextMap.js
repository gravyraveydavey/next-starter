import { getImageSizesFromColumns } from "@/helpers/getImageSizesFromColumns"
/**
 * Image Context Map
 * =========
 * contains a key value pair providing lookup for an images sizes attribute based on a simple reference string
 */
export const imageContextMap = {
    'wysiwyg-media': {
        width: 600,
        height: 331,
        sizes: '(max-width:600px) 600w, (max-width:800px) 800w, (max-width:1000px) 1000w, (max-width:1200px) 1200w',
    },
    'hero-primary': {
        width: 706,
        height: 760,
        sizes: getImageSizesFromColumns( 'col-12' ),
    },
    'hero-secondary': {
        width: 1120,
        height: 600,
        sizes: getImageSizesFromColumns( 'col-12' ),
    },
    'full-width': {
        width: 1120,
        height: 600,
        sizes: getImageSizesFromColumns( 'col-12' ),
    },
    'card': {
        width: 352,
        height: 240,
        sizes: getImageSizesFromColumns( 'col-12 col-md-4' ),
    },
    'logo': {
        width: 200,
        height: 120,
        sizes: getImageSizesFromColumns( 'col-4 col-md-3 col-lg-2' ),
    },
};
