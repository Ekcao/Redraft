export function nullArrayOfSize(size) {
    return new Array(size).fill(null);
}

export function replaceFirstNullWith(arr, obj) {
    const index = arr.indexOf(null);
    const arrCopy = [...arr];
    if (index > -1) {
        arrCopy[index] = obj;
    }

    return arrCopy;
}
