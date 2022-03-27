console.clear();
let student = ["Saad", "Hassan", "Usman", "Maaz"];
let serchStd = student.find(fnd);
student.splice(1, 4, ...["A ais", "Huzaifa"]);
student.sort();
console.log(...student);

function fnd(usman) {
    if (usman == "Usman")
        return true;
    else return false;
}