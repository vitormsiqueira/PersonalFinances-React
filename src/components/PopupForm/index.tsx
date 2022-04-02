import React from 'react'
import * as C from './styles'
import DeleteIcon from '../../assets/images/delete.png';
import { Coffee, Home, CreditCard, ShoppingBag, Gift, DollarSign } from 'styled-icons/feather'
import { categories } from '../../data/categories';
import { Category } from '../../types/Category'
import { icons } from 'react-icons/lib';
import { StyledIcon } from 'styled-icons/types'

type Props = {
    show: boolean,
    setShow: (newShow: boolean) => void,
    categories: Category,
}


export const PopUpForm = ({ show, setShow, categories }: Props) => {
    const Objeto = Object.values(categories);

    let Icon_1 = Objeto[0].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_2 = Objeto[1].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_3 = Objeto[2].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_4 = Objeto[3].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_5 = Objeto[4].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_6 = Objeto[5].icon as unknown as keyof JSX.IntrinsicElements;

    return show ? (
        <C.Container>
            <C.CardContainer>
                <C.Header>
                    <h3>Adicione um item </h3>

                    <button className="close-btn" onClick={() => setShow(false)}>
                        <img src={DeleteIcon} />
                    </button>
                </C.Header>
                <C.Content>
                    <C.ContainerInput>
                        <input type="text" placeholder="Adicione um titulo" />
                        <input type="double" placeholder="Valor" />
                    </C.ContainerInput>

                    <C.ContainerInput>
                        <C.IconStyleWrapper color={Objeto[0].color} backcolor={Objeto[0].backgoundcolor}>
                            <label>
                                <input type="radio" value="Male" name="gender" />
                                <Icon_1 className='icon' />
                            </label>

                            <label>
                                <input type="radio" value="Female" name="gender" />
                                <Icon_2 className='icon' />
                            </label>

                            <label>
                                <input type="radio" value="Other" name="gender" />
                                <Icon_3 className='icon' />
                            </label>

                            <label>
                                <input type="radio" value="Other" name="gender" />
                                <Icon_4 className='icon' />
                            </label>

                            <label>
                                <input type="radio" value="Other" name="gender" />
                                <Icon_5 className='icon' />
                            </label>

                            <label>
                                <input type="radio" value="Other" name="gender" />
                                <Icon_6 className='icon' />
                            </label>
                        </C.IconStyleWrapper>
                        <input id="date" type="date"></input>
                    </C.ContainerInput>
                    <button type="submit">Salvar</button>
                </C.Content>
            </C.CardContainer>
        </C.Container>
    ) : (<div />)
}

