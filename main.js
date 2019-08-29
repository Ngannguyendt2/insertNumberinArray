let arr = [2, 3, 4, 6, 7, 8];
let number = Number(prompt("Import number"));

function insertNumber() {

    for (let i = 0; i < arr.length; i++) {
        if (number < arr[0]) {
            arr.unshift(number);
            return arr;
        } else if (number >= arr[i] && number < arr[i + 1]) {
            arr.splice(i + 1, 0, number);
        } else if (number > arr[arr.length - 1]) {
            arr.push(number);
            return arr;
        }
    }
}

console.log(insertNumber());