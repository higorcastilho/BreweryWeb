class DateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');
    }

    static fixDate(date) {

    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

    }
} 

