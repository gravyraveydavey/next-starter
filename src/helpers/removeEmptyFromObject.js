export const removeEmptyFromObject = ( obj ) => {
    return Object.entries( obj )
        .filter(([_, v]) => v != null)
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}

export const removeFalsyFromObject = ( obj ) => {
    return Object.entries( obj )
        .filter(([_, v]) => ( v === false || v ))
        .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
}


export default removeEmptyFromObject
