import React from 'react';

class Form extends React.Component {

  render() {
    return (
<form action="#">
      
      <fieldset>
        <legend>Dados pessoais</legend>
        
        <div>
          <label for="name" className="form-label">Nome:</label>
          <input name="name" type="text" id="name" className="form-control form-control-lg" maxlength="40" required />
        </div>
        <div>
          <label for="email" className="form-label">Email:</label>
          <input name="email" type="text" id="email" className="form-control form-control-lg" maxlength="50" required />
        </div>
        <div>
          <label for="cpf" className="form-label">CPF:</label>
          <input name="cpf" type="text" id="cpf" className="form-control form-control-lg" maxlength="11" required />
        </div>
        <div>
          <label for="address" className="form-label">Endereço:</label>
          <input name="address" type="text" id="address" className="form-control form-control-lg" maxlength="200" required />
        </div>
        <div>
          <label for="city" className="form-label">Cidade:</label>
          <input name="city" type="text" id="city" className="form-control form-control-lg" maxlength="28" required />
        </div>
        <div>
          <label for="state" className="form-label">Estado:</label>
          <select name="state" id="state" className="form-select form-select-lg" required>
            <option value="BA">BA</option>
            <option value="MG">MG</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="RS">RS</option>
          </select>
        </div>
        <fieldset>
        <legend>Tipo:</legend>
        <div className="inputRadio">
          <input class="form-check-input" type="radio" name="type" id="type" />
          <label class="form-check-label" for="type1">Casa</label>

          <input class="form-check-input" type="radio" name="type" id="type" />
          <label class="form-check-label" for="type2">Apartamento</label>
        </div>
        </fieldset>
      </fieldset>

      <fieldset>
        <legend>Último emprego</legend>
        <div class="mb-3">
          <label for="summary" class="form-label">Resumo do curriculum:</label>
          <textarea class="form-control" id="summary" rows="5" maxlength="1000" required></textarea>
        </div>

        <div>
          <label for="role" className="form-label">Cargo:</label>
          <input name="role" type="text" id="role" className="form-control form-control-lg" maxlength="40" required />
        </div>

        <div class="mb-3">
          <label for="summary" class="form-label">Descrição do cargo:</label>
          <textarea class="form-control" id="summary" rows="5"  maxlength="500" required></textarea>
        </div>

      </fieldset>
      <div className="btn-all">
        <button className="btn btn-primary" type="submit" value="Submit">Enviar</button>
        <button className="btn btn-warning" type="submit" value="Reset">Limpar</button>
      </div>
    </form>
    );
  }
}

export default Form