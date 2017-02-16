export function nullArrayOfSize(size) {
    return new Array(size).fill(null);
}

export function replaceFirstNullWith(arr, obj) {
    const index = arr.indexOf(null);
    if (index > -1) {
        arr[index] = obj;
    }
}
