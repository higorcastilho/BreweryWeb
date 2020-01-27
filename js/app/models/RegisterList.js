class RegisterList {

    constructor() {
        this._registers = [];
    }

    addNewRegister(newRegister) {
        this._registers.push(newRegister);
    }

    get registers() {
        return [].concat(this._registers);
    }

}