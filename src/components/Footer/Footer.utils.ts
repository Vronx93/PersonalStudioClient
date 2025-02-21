export function chunkArray(array : [], chunkSize : number) {
    const chunkedArray = []
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize))
    }
    return chunkedArray
}

