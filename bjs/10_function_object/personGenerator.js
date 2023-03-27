const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алиса",
            "id_2": "Аврора",
            "id_3": "Ольга",
            "id_4": "Наталия",
            "id_5": "Ксения",
            "id_6": "Елизавета",
            "id_7": "Кристина",
            "id_8": "Варвара",
            "id_9": "Ульяна",
            "id_10": "Виктория"
        }    
    }`,
    month: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }    
    }`,
    occupation: `{
        "count": 20,
        "list": {     
            "id_1": "рудокоп",
            "id_2": "охотник за головами",
            "id_3": "инженер",
            "id_4": "успешный трейдер",
            "id_5": "рейнджер",
            "id_6": "пилот",
            "id_7": "пикинер",
            "id_8": "матрос",
            "id_9": "электромеханик",
            "id_10": "гипнокоучер",
            "id_11": "стюардесса",
            "id_12": "программист",
            "id_13": "балерина",
            "id_14": "хирург",
            "id_15": "учитель",
            "id_16": "менеджер",
            "id_17": "ветеринар",
            "id_18": "портной",
            "id_19": "психолог",
            "id_20": "повар"
        }    
    }`,

    //0 - female, 1 - male
    GENDER: 0,

    //returns a random number in the range from min to max inclusive
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    //if flag === true we return male or female occupation
    //otherwise return random value out from a list
    randomValue: function (json, flag = false) {
        const obj = JSON.parse(json);
        if (flag) {
            const property = this.GENDER ? `id_${this.randomIntNumber(obj.count / 2, 1)}` : `id_${this.randomIntNumber(obj.count, obj.count / 2)}`;
            return obj.list[property];
        } else {
            const property = `id_${this.randomIntNumber(obj.count, 1)}`;
            return obj.list[property];
        }
    },

    randomGender: function() {
        this.GENDER = this.randomIntNumber();
        return this.GENDER ? 'мужчина' : 'женщина';
    },

    randomFirstName: function() {
        return this.GENDER ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);
    },
    
    randomSurname: function() {  
        return this.GENDER ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson) + 'а';
    },

    randomDateOfBirth: function () {
        let month = this.randomValue(this.month);
        let day;
        if (month === 'апреля' || month === 'июня' || month === 'сентября' || month === 'ноября') {
            day = this.randomIntNumber(30, 1);
        } else {
            //because there are 29 days in February every 4th year
            if (month === 'февраля') {                           
                day = this.randomIntNumber(119, 0) % 4 ? this.randomIntNumber(28, 1) : this.randomIntNumber(29, 1);
            } else {
                day = this.randomIntNumber(31, 1);
            }
        }
        //1904 - leap year
        return String(1904 + this.randomIntNumber(119, 0)) + 'г., ' + String(day) + ' ' + month;
    },

    randomOccupation: function() {
        return this.randomValue(this.occupation, true);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = patronymicGenerator.randomPatronymic();
        this.person.surName = this.randomSurname();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.occupation = this.randomOccupation();
        return this.person;
    }
};

//Не уверен, что правильно понял условие задания:
//"генерация закреплённого за полом отчества в отдельном объекте, полученном от кода JSON" 
//сделал так...
const patronymicGenerator = {
    randomPatronymic: function() {
        let patronymic;
        let temp = personGenerator.randomValue(personGenerator.firstNameMaleJson);
        if (personGenerator.GENDER) {
            if (temp === 'Михаил') {
                patronymic = 'Михайлович';
            } else {
                switch (temp.charAt(temp.length - 1)) {
                    case 'й':
                        patronymic = temp.substr(0, temp.length - 1) + 'евич';
                        break;
                    case 'а':
                        patronymic = temp.substr(0, temp.length - 1) + 'ич';
                        break;
                    default:
                        patronymic = temp.substr(0) + 'ович';
                }
            }
        } else {
            if (temp === 'Михаил') {
                patronymic = 'Михайловна';
            } else {
                switch (temp.charAt(temp.length - 1)) {
                    case 'й':
                        patronymic = temp.substr(0, temp.length - 1) + 'евна';
                        break;
                    case 'а':
                        patronymic = temp.substr(0, temp.length - 1) + 'ична';
                        break;
                    default:
                        patronymic = temp.substr(0) + 'овна';
                }
            }
        }
        return patronymic;
    },
};
