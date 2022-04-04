import React, { ChangeEvent } from 'react'
import * as C from './styles'
import DeleteIcon from '../../assets/images/delete.png';
import { Coffee, Home, CreditCard, ShoppingBag, Gift, DollarSign } from 'styled-icons/feather'
import { categories } from '../../data/categories';
import { Category } from '../../types/Category'
import { icons } from 'react-icons/lib';
import { StyledIcon } from 'styled-icons/types'
import { Item } from '../../types/Item';
import { useState, useReducer } from "react";
import { items } from '../../data/items';
import { Formik, useFormik } from 'formik';

import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@material-ui/core'
import { Today } from 'styled-icons/material-twotone';
import { formateStringToDate } from '../../helpers/dateFilters';

type Props = {
    show: boolean,
    setShow: (newShow: boolean) => void,
    categories: Category,
    onAdd: (item: Item) => void;
}




export const PopUpForm = ({ show, setShow, categories, onAdd }: Props) => {
    const Objeto = Object.values(categories);

    let Icon_1 = Objeto[0].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_2 = Objeto[1].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_3 = Objeto[2].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_4 = Objeto[3].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_5 = Objeto[4].icon as unknown as keyof JSX.IntrinsicElements;
    let Icon_6 = Objeto[5].icon as unknown as keyof JSX.IntrinsicElements;

    const formik = useFormik({
        initialValues: { date: '', category: '', title: '', value: 0.0 },
        onSubmit: values => {
            const newDate = formateStringToDate(values.date);
            let newItem: Item = {
                date: newDate,
                category: values.category,
                title: values.title,
                value: values.value,
            }
            onAdd(newItem);
        },
    });

    return show ? (
        <C.Container>
            <C.CardContainer>
                <C.Header>
                    <h2>Adicione um item </h2>

                    <button className="close-btn" onClick={() => setShow(false)}>
                        <img src={DeleteIcon} />
                    </button>
                </C.Header>
                <C.Content>

                    <form onSubmit={formik.handleSubmit}>
                        <C.ContainerInput>
                            <label>
                                <h3>Título</h3>
                                <input
                                    type="text"
                                    placeholder="Adicione um titulo"
                                    name="title"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.title}
                                />
                            </label>

                            <label>
                                <h3>Valor</h3>
                                <input
                                    type="double"
                                    placeholder="Digite um valor"
                                    name="value"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.value}
                                />
                            </label>

                        </C.ContainerInput>

                        <C.ContainerInput>
                            <label><h3>Categoria</h3>
                                <C.IconStyleWrapper color={Objeto[0].color} backcolor={Objeto[0].backgoundcolor}>

                                    <label>
                                        <input type="radio" name='category' value="food" required onChange={formik.handleChange} />
                                        <Icon_1 className='icon' />
                                    </label>

                                    <label>
                                        <input type="radio" name='category' value="rent" required onChange={formik.handleChange} />
                                        <Icon_2 className='icon' />
                                    </label>

                                    <label>
                                        <input type="radio" name='category' value="credit" required onChange={formik.handleChange} />
                                        <Icon_3 className='icon' />
                                    </label>

                                    <label>
                                        <input type="radio" name='category' value="shopping" required onChange={formik.handleChange} />
                                        <Icon_4 className='icon' />
                                    </label>

                                    <label>
                                        <input type="radio" name='category' value="gift" required onChange={formik.handleChange} />
                                        <Icon_5 className='icon' />
                                    </label>

                                    <label>
                                        <input type="radio" name='category' value="salary" required onChange={formik.handleChange} />
                                        <Icon_6 className='icon' />
                                    </label>

                                </C.IconStyleWrapper>
                            </label>

                            <label>
                                <h3>Data</h3>
                                <input
                                    id="date"
                                    type="date"
                                    name="date"
                                    required
                                    onChange={formik.handleChange}
                                    value={formik.values.date}
                                ></input>
                            </label>

                        </C.ContainerInput>
                        <button type="submit" >Salvar</button>
                    </form>
                </C.Content>
            </C.CardContainer>
        </C.Container >
    ) : (<div />)
}

