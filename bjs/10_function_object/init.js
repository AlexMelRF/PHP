
// window.onload = function() {
//     const initPerson = personGenerator.getPerson();
//     document.querySelector('#genderOutput').innerText = initPerson.gender;
//     document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
//     document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
//     document.querySelector('#surnameOutput').innerText = initPerson.surName;
//     document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
//     document.querySelector('#occupationOutput').innerText = initPerson.occupation;
// };
const dataFields = document.querySelectorAll('.clrData');
document.querySelector('#refreshBtn').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#birthYearOutput').innerText = initPerson.dateOfBirth;
    document.querySelector('#occupationOutput').innerText = initPerson.occupation;
});

document.querySelector('#clearBtn').addEventListener('click', () => {
    dataFields[0].innerText = '';
    dataFields[1].innerText = '';
});