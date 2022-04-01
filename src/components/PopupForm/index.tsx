import React from 'react'
import * as C from './styles'
import DeleteIcon from '../../assets/images/delete.png';

type Props = {
    show: boolean,
    setShow: (newShow: boolean) => void
}


export const PopUpForm = ({show, setShow}: Props) => {
  return show ? (
    <C.Container>
        <C.CardContainer>
            <C.Header>
                <h3>Adicione um item</h3>

                <button className="close-btn" onClick={() => setShow(false)}>
                    <img src={DeleteIcon}/>
                </button>
            </C.Header>
            <C.Content>
                <p>Titulo</p>
                <p>Valor</p>
                <p>Categoria</p>
                <p>Data</p>
            </C.Content>
        </C.CardContainer>        
    </C.Container>
  ) : (<div/>)
}

