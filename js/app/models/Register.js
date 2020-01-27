class Register {

    constructor(date, breweryName, cnpj, address, contactPhone, email, password) {

        this._date = new Date();
        this._breweryName = breweryName;
        this._cnpj = cnpj;
        this._address = address;
        this._contactPhone = contactPhone;
        this._email = email;
        this._password = password;
        Object.freeze(this);
    }

    get date() {

    return new Date(this._date.getTime());
    }

    get breweryName() {

        return this._breweryName;
    } 

    get cnpj() {

        return this._cnpj;
    }

    get address() {
        return this._address;
    }

    get contactPhone() {

        return this._contactPhone;
    }

    get email() {

        return this._email;
    }

    get password() {

        return this._password;
    }

}