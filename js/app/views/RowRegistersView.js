class RowRegistersView extends View {

    constructor(element) {

        super(element);
    }

    template(model) {

    return `
        
        <table cellspacing="0" class="table-all" border="1px">
            <thead class="table-head">
                <tr>
                    <th>Data</th>
                    <th>Nome</th>
                    <th>CNPJ</th>
                    <th>Endereco</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Senha</th>
                </tr>
            </thead>

            <tbody>
                ${model.registers.map( n => 
                        `
                            <tr>
                                <td>${DateHelper.fixDate(new Date())}</td>
                                <td>${n.breweryName}</td>
                                <td>${n.cnpj}</td>
                                <td>${n.address}</td>
                                <td>${n.contactPhone}</td>
                                <td>${n.email}</td>
                                <td>${n.password}</td>
                            </tr>
                        `
                ).join('')}

            </tbody>

        </table>
        `;
    }

}