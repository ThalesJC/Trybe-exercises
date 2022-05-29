import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Currículum Vitae</h1>
      <form>
        <fieldset className="fieldset">
          {/* Dados pessoais */}
          <div className="input-name-cpf">
          <input className="input-dados" type="text" placeholder="Nome" required />
          <input className="input-dados" type="text" placeholder="CPF" required />
          </div>
          <div className="input-email-adress">
          <input className="input-dados" type="email" placeholder="E-mail" required />
          <input className="input-dados" type="text" placeholder="Endereço" required />
          </div>
          <div className="input-adress">
          <input className="input-dados" type="text" placeholder="Cidade" required />
          <input className="input-dados" type="text" placeholder="Estado" required />
          </div>
          {/* Radiobuttons */}
          <div className="radio-container">
            <label htmlFor="casa">
              <input className="radio" id="casa" type="radio" />
              Casa
            </label>
            <label htmlFor="apartamento">
              <input className="radio" id="apartamento" type="radio" />
              Apartamento
            </label>
          </div>
        </fieldset>
        {/* Dados profissionais */}
        <fieldset id="fieldset" >
          <label className="label" htmlFor="resumo">Resumo do currículo:</label>
            <textarea id="resumo" className="text-area" required />
          <label className="label" htmlFor="cargo">Cargo:</label>
            <input id="cargo" className="input-dados" type="text" required />
          <label className="label" htmlFor="descricao">Descrição do cargo:</label>  
            <textarea id="descricao" className="text-area" required />
          <div className="btn-div">
            <button type="button">Salvar</button>
            <button type="button">Limpar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
