
// window.onload = function() {
//     const initPerson = personGenerator.getPerson();
//     document.querySelector('#genderOutput').innerText = initPerson.gender;
//     document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
//     document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
//     document.querySelector('#surnameOutput').innerText = initPerson.surName;
//     document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
//     document.querySelector('#occupationOutput').innerText = initPerson.occupation;
// };
const dataFields = document.querySelectorAll('.inData');
document.querySelector('#refreshBtn').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
    document.querySelector('#occupationOutput').innerText = initPerson.occupation;
});

//Clear all the fields
document.querySelector('#clearBtn').addEventListener('click', () => {
    for (let i = 0; i < dataFields.length; i++)
        dataFields[i].innerText = ' ';
});