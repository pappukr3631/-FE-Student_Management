let students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree: 'Arts', email: 'charlie@example.com' }
];

// Show Default Data in Table
showDefaultData();
function showDefaultData() {
    for(let i=0; i<students.length; i++) {
        appendDataToTable(students[i]);
    }
}

// Add Student
function addStudent() {
    const name = document.getElementById("name-input");
    const age = document.getElementById("age-input");
    const email = document.getElementById("email-input");
    const grade = document.getElementById("grade-input");
    const degree = document.getElementById("degree-input");

    let data = {
        ID: getMaxID() + 1,
        name: name.value,
        age: age.value,
        grade: grade.value,
        degree: degree.value,
        email: email.value
    };

    students.push(data);
    appendDataToTable(data);

    // Reset form
    resetForm();
}

function appendDataToTable(data) {
    const tbody = document.getElementById("table-body");

    // Create elements
    const tr = document.createElement("tr");
    // Table data elements
    const id_td = document.createElement("td");
    id_td.innerText = data.ID;

    const name_td = document.createElement("td");
    name_td.innerText = data.name;

    const age_td = document.createElement("td");
    age_td.innerText = data.age;

    const email_td = document.createElement("td");
    email_td.innerText = data.email;

    const grade_td = document.createElement("td");
    grade_td.innerText = data.grade;

    const degree_td = document.createElement("td");
    degree_td.innerHTML = `${data.degree}
    <div>
        <img src="img/edit 1.svg" onclick="edit(this)" />
        <img src="img/trash-2 1.svg" onclick="deleteElement(this)" />
    </div>`;

    tr.appendChild(id_td);
    tr.appendChild(name_td);
    tr.appendChild(email_td);
    tr.appendChild(age_td);
    tr.appendChild(grade_td);
    tr.appendChild(degree_td);

    tbody.appendChild(tr);
}

function getMaxID() {
    let id = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i].ID > id)
            id = students[i].ID;
    }
    return id;
}

// Deleting a row
function deleteElement(element) {
    let row = element.closest("tr");
    // Remove from array
    let idToRemove = parseInt(row.cells[0].innerText);
    deleteDataFromArray(idToRemove);
    
    // Removing from UI
    row.remove();
}

function deleteDataFromArray(idToRemove) {
    for(let i=0; i<students.length; i++) {
        if(students[i].ID == idToRemove) {
            students.splice(i, 1);
            break;
        }
    }
    console.log(students);
}

// Edit Student functionality
let indexToEdit = -1;
let rowToEdit = null;
function edit(element) {
    rowToEdit = element.closest("tr");

    let idToEdit = parseInt(rowToEdit.cells[0].innerText);

    fillForm(idToEdit);
}

function fillForm(id) {
    let studentToEdit = null;
    for(let i=0; i<students.length; i++) {
        if(students[i].ID === id) {
            indexToEdit = i;
            studentToEdit = students[i];
            break;
        }
    }
    // Get elements
    const name = document.getElementById("name-input");
    const age = document.getElementById("age-input");
    const email = document.getElementById("email-input");
    const grade = document.getElementById("grade-input");
    const degree = document.getElementById("degree-input");
    const button = document.getElementById("submit");
    // Put data
    name.value = studentToEdit.name;
    age.value = studentToEdit.age;
    email.value = studentToEdit.email;
    grade.value = studentToEdit.grade;
    degree.value = studentToEdit.degree;

    // Change Button value
    button.innerText = "Edit Student";
    button.onclick = editStudent;
}

function editStudent() {
    console.log("edit student function");

    // Get elements
    const name = document.getElementById("name-input");
    const age = document.getElementById("age-input");
    const email = document.getElementById("email-input");
    const grade = document.getElementById("grade-input");
    const degree = document.getElementById("degree-input");
    const button = document.getElementById("submit");
    // Change values of selected student
    rowToEdit.cells[1].innerText = name.value;
    rowToEdit.cells[2].innerText = email.value;
    rowToEdit.cells[3].innerText = age.value;
    rowToEdit.cells[4].innerText = grade.value;
    rowToEdit.cells[5].innerHTML = `${degree.value}
    <div>
        <img src="img/edit 1.svg" onclick="edit(this)" />
        <img src="img/trash-2 1.svg" onclick="deleteElement(this)" />
    </div>`;

    // Change the students arr
    students[indexToEdit].name = name.value;
    students[indexToEdit].email = email.value;
    students[indexToEdit].age = age.value;
    students[indexToEdit].grade =grade.value;
    students[indexToEdit].degree = degree.value;

    console.log(students);

    // Change Button value
    button.innerText = "Add Student";
    button.onclick = addStudent;

    // clear the form
    resetForm();
}

function resetForm() {
    const form = document.getElementById("form");
    form.reset();
}