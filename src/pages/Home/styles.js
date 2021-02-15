import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 700px) {
    margin-top: 2em;
    flex-direction: column-reverse;    
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  padding: 0.5em;

  background-color: transparent;
  color: #4E0F7A;

  div + div {
    margin-top: 0.5em;
  }

  > div {
    display: flex;
    flex-direction: column;

    cursor: pointer;
    padding: 1em;
    border-radius: 5px;
    font-size: 14px;
    color: #a8a8b3;
    border: solid 2px #330142;
    background-color: #141414;
    transition: all .3s;

    &:hover {
      color: #fff;
      border: solid 2px #451111;
    }

    span + span {
      margin-top: 5px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Register = styled.article`
  padding: 1.5em 3em;
  width: 100%;

  > form {
    display: flex;
    flex-direction: column;

    div + div {
      margin-top: 1em;
    }

    > div {
      display: flex;
      flex-direction: column;

      span {
        color: #a8a8b3;
        font-size: 0.8em;
        margin-bottom: 0.2em;
      }

      input,
      select {
        font-size: 16px;
        padding: 0.5em;
        height: 50px;
        outline: none;
        
        border: 2px solid transparent;
        border-radius: 5px;
        color: #fff;
        background-color: #141414;


        &::placeholder {
          color: #a8a8b3;
        }

        &:focus{
          border: 2px solid #330142;
        }
      }
    }

    > div.button {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;

      button {
        height: 50px;
        padding: 0.5em 1.5em;
        margin-left: 0.8em;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        font-weight: 400;

        transition: all .2s;
      }

      button.salvar {
        color: #fff;
        background-color: #007E25;
        &:hover {
          background: ${shade(0.2, '#007E25')};
        }
      }

      button.excluir {
        color: #fff;
        background-color: #4A0000;
        
        &:hover {
          background: ${shade(0.2, '#4A0000')};
        }
      }

      button.editar {
        color: #fff;
        background-color: #0F0F4D;
        
        &:hover {
          background: ${shade(0.2, '#0F0F4D')};
        }
      }
    }
  }

  @media (max-width: 700px) {
    padding: .5em;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;

  button {
    height: 50px;
    padding: 0.5em 1.5em;
    margin-left: 0.8em;
    background-color: #034f30;
    border: none;
    border-radius: 5px;
    color: #FFF;
    transition: all .2s;

    &:hover {
      color: #FFF;
      background: ${shade(0.2, '#034f30')};
    }
  }

  @media (max-width: 700px) {
    margin-right: .5em;
    margin-bottom: 2em;
  }
`;
