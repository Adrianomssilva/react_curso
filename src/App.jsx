import React from "react"


const App = () => {
  const formObject = {
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  }
  const [form, setForm] = React.useState(formObject);

  function handleChange ({target}) {
    const {id, value} = target;
    setForm({...form, [id]: value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      console.log(response);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nome'>Nome</label>
      <input type="text" id='nome' value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={form.email} onChange={handleChange} />
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" value={form.senha} onChange={handleChange} />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="rua">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Numero</label>
      <input type="text" id="numero" value={form.numero} onChange={handleChange} />
      <label htmlFor="bairro">Bairro</label>
      <input type="text" id="bairro" value={form.bairro} onChange={handleChange} />
      <label htmlFor="cidade">Cidade</label>
      <input type="text" id="cidade" value={form.cidade} onChange={handleChange} />
      <label htmlFor="estado">Estado</label>
      <input type="text" id="estado" value={form.estado} onChange={handleChange} />
      <button>Enviar</button>
    </form>
  )
}

export default App
