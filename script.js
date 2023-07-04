let students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'Charlie', age: 20, grade: 'C', degree: 'Arts', email: 'charlie@example.com' }
];


function getData() {
    const name = document.getElementById("name-input");
    const age = document.getElementById("age-input");
    const email = document.getElementById("email-input");
    const gpa = document.getElementById("gpa-input");
    const degree = document.getElementById("degree-input");

    let data = {
        ID: getMaxID() + 1,
        name: name.value,
        age: age.value,
        grade: gpa.value,
        degree: degree.value,
        email: email.value
    };

    students.push(data);
    appendDataToTable(data);
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

    const gpa_td = document.createElement("td");
    gpa_td.innerText = data.grade;

    const degree_td = document.createElement("td");
    degree_td.innerHTML = `${data.degree}
    <div>
        <img src="/img/edit1.png" onclick="edit(element)" />
        <img src="/img/trash-2.png" onclick="deleteElement(element)" />
    </div>`;

    tr.appendChild(id_td);
    tr.appendChild(name_td);
    tr.appendChild(email_td);
    tr.appendChild(age_td);
    tr.appendChild(gpa_td);
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