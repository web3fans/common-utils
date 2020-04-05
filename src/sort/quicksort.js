/**快速排序**/
export default quickSort = (arr) => {
    if(!arr.length) {
        return []
    }

    const [ pivot, ...rest ]  = arr;

    return [
        ...quickSort(rest.filter( x => x < pivot)),
        pivot,
        ...quickSort(rest.filter( x => x >= pivot))
    ]
}