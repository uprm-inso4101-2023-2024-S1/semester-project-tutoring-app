

export default class Tutor {
    constructor(name, lastName, specialty, courses, rating, email, userID) {
        this._name = name;
        this._lastName = lastName;
        this._specialty = specialty;
        this._courses = courses;
        this._rating = rating;
        this._email = email;
        this._userID = userID;
    }

    get name() {
        return this._name;
    }
    get lastName() {
        return this._lastName;
    }
    get specialty() {
        return this._specialty;
    }
    get courses() {
        return this._courses;
    }
    get rating() {
        return this._rating;
    }
    get email() {
        return this._email;
    }
    get userID() {
        return this._userID;
    }
    set name(name) {
        this._name = name;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set specialty(specialty) {
        this._specialty = specialty;
    }
    set courses(courses) {
        this._courses = courses;
    }
    set rating(rating) {
        this._rating = rating;
    }
    set email(email) {
        this._email = email;
    }
    set userID(userID) {
        this._userID = userID;
    }
}