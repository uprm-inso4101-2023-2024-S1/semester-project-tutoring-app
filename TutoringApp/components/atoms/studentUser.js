

export default class studentUser {
    constructor(name, lastName, activeCourses, rating, email, userID) {
        this._name = name;
        this._lastName = lastName;
        this._activeCourses = activeCourses;
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
    
    get activeCourses() {
        return this._activeCourses;
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
    set activeCourses(activeCourses) {
        this._activeCourses = activeCourses;
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