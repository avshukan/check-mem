import printMem from "./printMem.js"

const useArray = (elementsCount, lineLength) => {
    console.log(`elementsCount = ${elementsCount} with ${lineLength} length`)
    const arr = [];
    for (let i = 1; i <= elementsCount; i += 1) {
        arr.push('a'.repeat(lineLength))
    }
    printMem();
}

export default useArray;