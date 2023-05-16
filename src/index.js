import printMem from "./printMem.js";
import useArray from "./useArray.js";

printMem();

useArray(10 * 1000, 1000)

global.gc();

printMem();

useArray(10 * 1000 * 1000, 1000)

global.gc();

printMem();

useArray(10 * 1000, 1000)

global.gc();

printMem();

useArray(10 * 1000 * 1000, 1000)

global.gc();

printMem();
