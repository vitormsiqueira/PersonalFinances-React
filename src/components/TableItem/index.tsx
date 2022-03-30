import * as C from './styles';
import React, {Fragment} from 'react'

import { Item } from '../../types/Item';
import { formateDate } from '../../helpers/dateFilters';
import { categories } from '../../data/categories';
import { FiGift, FiDollarSign } from 'react-icons/fi';

import {StyledIcon} from 'styled-icons/types';
import {Coffee, Home, CreditCard, ShoppingBag, Gift, DollarSign} from '@styled-icons/feather'
import {AccountCircle, Lock} from '@styled-icons/material'


type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    const Icone = categories[item.category].icon as unknown as keyof JSX.IntrinsicElements;

    return (
        <C.Container>
            <C.TableLine>
                <C.TableColumn>
                    
                    <C.IconStyleWrapper>
                        <C.Category color={categories[item.category].backgoundcolor} >
                            <Icone color={categories[item.category].color} size={20} />
                        </C.Category>
                    </C.IconStyleWrapper> 
                    
                </C.TableColumn>

                <C.Bills>
                    <C.BillTitle>{item.title}</C.BillTitle>
                    <C.BillDate>{formateDate(item.date)}</C.BillDate>
                </C.Bills>

                <C.TableColumn>
                    <C.Value >
                        R$ {item.value}
                    </C.Value>
                </C.TableColumn>

            </C.TableLine>
        </C.Container>

    );
}