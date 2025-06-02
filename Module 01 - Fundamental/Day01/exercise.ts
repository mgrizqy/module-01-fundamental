/*
#1
Write a code to find area of rectangle
- Example : length = 5, width = 3
- Output : 15

Pseudocode :
1. Siapkan data yang diperlukan di kotak masing- masing
2. Siapkan kotak C yang menyimpan kalkulasi data yang disiapkan untuk menemukan luas persegi, yg isinya tidak bisa diubah
Rumus = length * width
3. Tunjukkan hasil kotak C 
*/

let width :number = 5;
let height :number = 3;
const rectangleArea :number = width * height;
console.log(rectangleArea);





/*
#2
Write a code to find perimeter of rectangle
- Example : length = 5, width = 3
- Output : 16


Pseudocode :
1. Siapkan data yang diperlukan di kotak masing- masing
2. Siapkan kotak C yang menyimpan kalkulasi data yang disiapkan untuk menemukan keliling persegi, yg isinya tidak bisa diubah
Rumus = 2(length + width)
3. Tunjukkan hasil kotak C 
*/

let width2 :number = 5;
let height2 :number = 3;
const rectangleAround2 :number = 2 * (width2 + height2);
console.log(rectangleAround2);






/*
#3
Write a code to find diameter, circumference, and area of a cirle 
- Example : radius = 5
- Output : diameter = 10, circumference = 3.4159, area = 78.539

Pseudocode :
1. Siapkan data yang diperlukan di kotak
2. Siapkan kotak-kotak yang menyimpan kalkulasi data yang disiapkan untuk menemukan diameter lingkaran, keliling lingkaran, dan luas lingkaran, yg isinya tidak bisa diubah
Rumus = 
- Diameter = 2 * radius
- Keliling Lingkaran = 2 * PI * r
- Luas lingkaran = PI * r(2)
3. Tunjukkan hasil kotak-kotak yang mengkalkulasi diameter lingkaran, keliling lingkaran, dan luas lingkaran
*/

let radius :number = 5;

const diameter :number = 2 * radius;
const circumference :number = 2 * Math.PI * radius;
const areaCircle :number = Math.PI * Math.pow(radius, 2);
console.log(diameter);
console.log(circumference);
console.log(areaCircle);


/*
#4
Write a code to find angles of triangle if two angles are given
- Example : a = 80, b = 65
- Output : 35

Pseudocode :
1. Siapkan data yang diperlukan di kotak-kotak masing2
2. Siapkan kotak yang menyimpan kalkulasi data yang disiapkan untuk menemukan sudut segitiga, 
yg isi kotaknya tidak bisa diubah (fix)
Rumus = 
A + B + C = 180
C = 180 - (A + B)
3. Tunjukkan hasil kotak yang mengkalkulasi sudut segitiga

*/

let a :number = 80;
let b :number = 65;
const c :number = 180 - (a + b);
console.log(c);

/////////////////////////////////////////////////////////////////


/*
#5
Write a code to to convert temperature from Celcius to Fahrenheit.
- Example : celcius = 25
- Output : 77

Pseudocode :
1. Siapkan data yang diperlukan di kotak
2. Siapkan kotak yang menyimpan kalkulasi data yang disiapkan untuk menemukan konversi celcius ke fahrenheit, yg isi kotaknya tidak bisa diubah (fix)
Rumus = 
celcius * (9/5) + 32
3. Tunjukkan hasil kotak yang mengkalkulasi konversi tersebut

*/

let celcius :number = 25;
const fahrenheit :number = celcius * (9/5) + 32;
console.log(fahrenheit); 



/*
#6
Write a code to swap 2 numbers.
- Example : a = 4, b = 7
- Output : a = 7, b = 4

Pseudocode :
1. Siapkan data yang diperlukan di kotak
2. Siapkan kotak kosong 1 (jadi ada kotak A,B,C)
3. Taruh isi kotak A ke kotak C, lalu taruh isi kotak B ke A, lalu taruh isi C ke B
4. Tunjukkan hasil tersebut

*/

let A :number = 4;
let B :number = 7;
let temp :number;

temp = A;
A = B;
B = temp;


console.log(`a = ${A}, b = ${B}`);

/*
#7
Write a code to get the first and last character from a string.
- Example : word = "Programming"
- Output : P and g

Pseudocode :
1. Siapkan data string yang diperlukan di kotak (word)
2. Siapkan 2 kotak (fix) untuk menyimpan karakter pertama dan terakhir dari kotak (word) dgn data string sblmnya
3. Untuk karakter terakhir, dicari dengan menemukan jumlah total karakter di kotak word, lalu kurangi 1 dan input kan ke command untuk seleksi karakter
4. Tunjukkan karakter pertama dan terakhir dari kota (word)


*/

let word :string = "Programming";

const firstChar :string = word.charAt(0);
const lastChar :string = word.charAt(word.length - 1) ;
console.log(`${firstChar} and ${lastChar}`); 


/*
#8
Write a code to calculate the square and cube of a number
- Example : number = 4
- Output : square = 16, cube 64

Pseudocode :
1. Siapkan data yang diperlukan di kotak (number)
2. Siapkan 2 kotak (fix) untuk menyimpan dan memproses square (kuadrat atau pangkat 2) dan cube (kubik atau pangkat 3) 
dari data kotak (number), menggunakan Math.pow
3. Tunjukkan hasil dari kuadrat dan kubik


*/

let number :number = 4;
const square :number = Math.pow(4, 2); 
const cube :number = Math.pow(4, 3); 

console.log(square)
console.log(cube)


/*
#9
Write a code to convert minutes to hours and minutes
- Example : totalMinutes = 135
- Output : 2 hours and 15 minutes

Pseudocode :
1. Siapkan data yang diperlukan di kotak (totalMinutes)
2. Siapkan 2 kotak (fix) untuk menyimpan dan menkalkulasi menit dan jam
3. Untukk menit, menggunakan modulus 60 terhadap totalMinutes, dan untuk jam, membagi totalMinutes sebanyak 60 lalu difloorkan supaya jumlahnya bulat kebawah 
3. Tunjukkan hasil dari kuadrat dan kubik


*/

let totalMinutes :number = 135;

const minutes :number = totalMinutes % 60;
const hours :number = Math.floor(totalMinutes / 60);


console.log(`${hours} hours and ${minutes} minutes`)
