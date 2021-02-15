import React, { useEffect, useState, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import CurrencyInput from 'react-currency-input';
import api from '../../services/api';
import { v4 as uuid_v4 } from 'uuid';
import { Container, ContainerButton, List, Register } from './styles';

const Home = () => {
  const [clientes, setClientes] = useState([]);
  const [dividas, setDividas] = useState(() => {
    const storageDividas = localStorage.getItem('@gerenciarDividas:list');
    if (storageDividas) {
      return JSON.parse(storageDividas);
    }
    return [];
  });

  const [idDivida, setIdDivida] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [motivo, setMotivo] = useState('');
  const [valor, setValor] = useState(0);
  const [data, setData] = useState('');

  useEffect(() => {
    api.get(`/users`).then((response) => {
      setClientes(response.data);
    });

    localStorage.setItem('@gerenciarDividas:list', JSON.stringify(dividas));
  }, [dividas]);

  function handleSubmit(e) {
    e.preventDefault();

    const createDivida = {
      id_divida: uuid_v4(),
      id,
      name,
      motivo,
      valor,
      data,
    };

    dividas.unshift(createDivida);
    setDividas([...dividas]);
    novaDivida();
  }

  function handleChange(e){
    const element = e.target;
    var index = element.selectedIndex;
    setName(element[index].text)
    setId(element.value);
  }

  function verDivida(divida){
    setIdDivida(divida.id_divida);
    setId(divida.id);
    setName(divida.name);
    setMotivo(divida.motivo);
    setValor(divida.valor);
    setData(divida.data);
  }

  const removerDivida = useCallback(() => {    
    var filterRemove = dividas.filter(item => item.id_divida !== idDivida);
    setDividas(filterRemove);
  }, [dividas, idDivida]);

  const editarDivida = useCallback(() => {    
    var findEdit = dividas.find(item => item.id_divida === idDivida);
        findEdit.motivo = motivo;
        findEdit.valor = valor;
        findEdit.data = data;

        setDividas([...dividas]);
        novaDivida();
  });

  const novaDivida = () => {
    setIdDivida('');
    setId('');
    setName('');
    setMotivo('');
    setValor('');
    setData('');
  }

  return (
    <>
      <Container>
        <List>
          { dividas.length > 0 ?
            dividas.map((divida) => (
              <div key={divida.id_divida} onClick={() => verDivida(divida)}>
                <span>{divida.name}</span>
                <span>{divida.valor}</span>
              </div>
            ))
          : 'No momento não tem divida cadastra.'}
        </List>

        <Register>
          <form onSubmit={handleSubmit}>
            <div>
              <span>Cliente</span>
              <select name="user" value={id} onChange={handleChange}>
                {clientes.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span>Motivo</span>
              <input
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
                name="motivo"
                id="motivo"
                type="text"
                placeholder="Motivo da divida"
                required
              />
            </div>

            <div>
              <span>Valor</span>
              <CurrencyInput
                autoComplete="off"
                value={valor}
                onChangeEvent={(e) => setValor(e.target.value)}
                prefix={'R$ '}
                decimalSeparator="," 
                thousandSeparator="."
                name="valor"
                type="text"
                placeholder="Valor da divida"
                required
              />
            </div>

            <div>
              <span>Data</span>
              <NumberFormat
                autoComplete="off"
                value={data}
                onChange={(e) => setData(e.target.value)}
                name="data"
                type="text"
                format="##/##/####"
                mask="_"
                placeholder="12/02/2021"
                required
              />
            </div>

            <div className="button">
              <button className="excluir" type="button" onClick={() => removerDivida(idDivida)}>Excluir</button>
              
              { idDivida.length > 0 ?
                <button className="editar" type="button" onClick={() => editarDivida(idDivida)}>Editar</button> :
                <button className="salvar" type="submit">Salvar</button> }
            </div>
          </form>
        </Register>
      </Container>
      <ContainerButton>
        <button type="button" onClick={novaDivida}>Novo</button>
      </ContainerButton>
    </>
  );
};

export default Home;
