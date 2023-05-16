import os from 'os';

const printMem = () => {
    const osFreeMem = os.freemem()
    const allFreeMem = (osFreeMem / (1024 * 1024 * 1024))

    const osTotalMem = os.totalmem()
    const avbMem = (osTotalMem / (1024 * 1024 * 1024))

    console.log(`Total free memory: ${allFreeMem.toFixed(2)} Gb at Total available RAM: ${avbMem.toFixed(2)} Gb`)
};

export default printMem;