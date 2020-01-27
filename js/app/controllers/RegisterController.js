class RegisterController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputName = $('#breweryName');
        this._inputCNPJ = $('#cnpj');
        this._inputAddress = $('#address');
        this._inputContactPhone = $('#contactPhone');
        this._inputEmail = $('#email');
        this._inputPassword = $('#password');
        
        this._registerList = new Bind( 
            new RegisterList(),
            new RowRegistersView($('.Row-Register-View')),
            'addNewRegister'); 
            
        this._message = new Bind(
            new Message(),
            new MessageView($('#message-view')),
            'text'); 
    }

    addRegister(event) { 

        event.preventDefault();
        this._registerList.addNewRegister(this._createNewRegister());

        this._message.text = 'Cadastro realizado com sucesso';

        this._clearForm();

        console.log(this._registerList.registers);
        console.log(DateHelper.fixDate(new Date()));
    }

    _createNewRegister() {

        return new Register(

            DateHelper.fixDate(new Date()),
            this._inputName.value,
            this._inputCNPJ.value,
            this._inputAddress.value,
            this._inputContactPhone.value,
            this._inputEmail.value,
            this._inputPassword.value
        );
    }

    _clearForm() {

        this._inputName.value='';
        this._inputCNPJ.value='';
        this._inputAddress.value='';
        this._inputContactPhone.value='';
        this._inputEmail.value='';
        this._inputPassword.value='';

        this._inputName.focus();
    }
 
}