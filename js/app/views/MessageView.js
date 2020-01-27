class MessageView extends View  {

    constructor(element) {

        super(element);
    }

    template(model) {

        return model.text ? `<p class="message-view" >${model.text} </p>` : `<p></p>` ;
    }

}