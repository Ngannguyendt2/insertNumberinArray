let arr = [2, 3, 4, 6, 7, 8];
let arr1 = [];
let arr2 = [];
let arrnew = [];
let number = Number(prompt("Import number"));

function insertNumber() {

    for (let i = 0; i < arr.length; i++) {
        if (number < arr[0]) {
            arr.unshift(number);
            return console.log(arr);
        } else if (number >= arr[i] && number < arr[i + 1]) {
            for (let j = 0; j <= i; j++) {
                arr1.push(arr[j]);
            }
            arr1.push(number);
            for (let k = i + 1; k < arr.length; k++) {
                arr2.push(arr[k]);
            }
        } else if (number > arr[arr.length - 1]) {
            arr.push(number)
            return console.log(arr);
        }
    }
    arrnew = arr1.concat(arr2);
    console.log(arrnew);

}

insertNumber();