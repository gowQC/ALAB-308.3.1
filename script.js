//TASK 1
let x = 1;

while (x <= 100) {
    //console.log("======")
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("Fizz Buzz");
    }
    else if (x % 3 == 0) {
        console.log("Fizz");
    }
    else if (x % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(x);
    }
    x++;
    //console.log("======")
}
console.log("======================")

//TASK 2
let prime = 14;

switch (prime) { //n 14 should print only 17 - works up to n = 52
    case 1:
        console.log("2");
        break;
    case 2:
        console.log("3");
        break;
    case 3: case 4:
        console.log("5");
        break;
    case 5: case 6:
        console.log("7");
        break;
    case 7: case 8: case 9: case 10:
        console.log("11");
        break;
    case 11: case 12:
        console.log("13");
        break;
    case 13: case 14: case 15: case 16:
        console.log("17");
        break;
    case 17: case 18:
        console.log("19");
        break;
    case 19: case 20: case 21: case 22:
        console.log("23");
        break;
    case 23: case 24: case 25: case 26: case 27: case 28:
        console.log("29");
        break;
    case 29: case 30:
        console.log("31");
        break;
    case 31: case 32: case 33: case 34: case 35: case 36:
        console.log("37");
        break;
    case 37: case 38: case 39: case 40:
        console.log("41");
        break;
    case 41: case 42:
        console.log("43");
        break;
    case 43: case 44: case 45: case 46:
        console.log("47");
        break;
    case 47: case 48: case 49: case 50: case 51: case 52:
        console.log("53");
        break;
}
console.log("======================")

//TASK 3
let csv_string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let new_string = "";
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let counter = 0;

for (let i = 0; i < csv_string.length; i++) {
    if (csv_string[i] === ',' || csv_string[i] === '\n') { // \n counts as 1 character rather than 2 characters, hence why this works
        switch (counter) {
            case 0:
                cell1 = new_string;
                counter++;
                new_string = " "; //resets string
                break;
            case 1:
                cell2 = new_string;
                counter++;
                new_string = " ";
                break;
            case 2:
                cell3 = new_string;
                counter++;
                new_string = " ";
                break;
            case 3:
                cell4 = new_string;
                counter++;
                new_string = " ";
                break;
        }
        if (counter == 4) {
            console.log(cell1, cell2, cell3, cell4);
            counter = 0;
        }
    }
    else {
        new_string += csv_string[i];
    }
}

// while (prime < 50) {

//     for (let x = 1; x < prime; x++) {
//         if (prime == 2) {
//             console.log()
//         }
//         if(prime != 1 && prime%x) { //prime condition >> 6n + 1 or 6n - 1
//             console.log(prime);
//         }
//     }

//     prime++;
// }