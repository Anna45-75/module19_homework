const student = {
    name: "Ivan",
    height: 186
}

let clothes = Object.create(student);
clothes.size = "XL";

delete clothes.size;

function studentProp() {
    console.log("size" in student);
    alert("name" in student);
}

studentProp();
