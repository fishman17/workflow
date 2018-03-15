const add = (a,b) => {
    if (
        typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
        return NaN;
    }
};
const minus = (a,b) => {
    if (
        typeof a === "number" && typeof b === "number") {
        return a - b;
    }else{
        return NaN;
    }
};
module.exports={add,minus}; 