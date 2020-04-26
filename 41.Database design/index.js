//database design

var classes = [
  {
    id: 0,
    name: "1A",
    teacher: 0,
  },
  {
    id: 1,
    name: "2A",
    teacher: 1,
  },
  {
    id: 2,
    name: "3A",
    teacher: 2,
  },
  {
    id: 3,
    name: "4A",
    teacher: 3,
  },
  {
    id: 4,
    name: "5A",
    teacher: 4,
  },
];

/*
var class1A = classes.find(function (x) {
  return x.name === "1A";
});

console.log(class1A);
*/

var teachers = [
  { id: 0, name: "Huong", age: 20 },
  { id: 1, name: "Thuy", age: 21 },
  { id: 2, name: "Tuan", age: 21 },
  { id: 3, name: "Trung", age: 21 },
  { id: 4, name: "Hue", age: 21 },
];

var students = [
  { name: "Minh", height: 180, class: 0 },
  { name: "Hai", height: 152, class: 0 },
  { name: "Trong", height: 160, class: 0 },
  { name: "Khoa", height: 150, class: 1 },
  { name: "Hoa", height: 142, class: 1 },
  { name: "Trinh", height: 168, class: 1 },
  { name: "Vu", height: 170, class: 2 },
  { name: "Tuan", height: 169, class: 2 },
  { name: "Tri", height: 167, class: 2 },
  { name: "Vuong", height: 120, class: 3 },
  { name: "Thuan", height: 132, class: 3 },
  { name: "Hieu", height: 164, class: 3 },
  { name: "Nam", height: 156, class: 4 },
  { name: "Thuy", height: 157, class: 4 },
  { name: "Anh", height: 149, class: 4 },
];

function getStudentInClass(className) {
  var classObject = classes.find(function (x) {
    return x.name === className;
  });
  var studentsInClass = students.filter(function (student) {
    return student.class === classObject.id;
  });

  return studentsInClass;
}

var studentsInClass = getStudentInClass("2A");

console.log(studentsInClass);
