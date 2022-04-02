import { Category } from '../types/Category'
import {Coffee, Home, CreditCard, ShoppingBag, Gift, DollarSign} from 'styled-icons/feather'

export const categories: Category = {
    food:       { title: 'Alimentação',         color: '#298dff', backgoundcolor: '#e5f3ff', icon: Coffee, expense: true },
    rent:       { title: 'Aluguel',             color: '#e64759', backgoundcolor: '#ffe6e6', icon: Home, expense: true },
    credit:     { title: 'Cartão de Crédito',   color: '#ec983d', backgoundcolor: '#fff8e5', icon: CreditCard, expense: true },
    shopping:   { title: 'Compras',             color: '#b09fff', backgoundcolor: '#f3f1ff', icon: ShoppingBag, expense: true },
    gift:       { title: 'Presentes',           color: '#309b91', backgoundcolor: '#e5f3ff', icon: Gift, expense: true },
    salary:     { title: 'Salário',             color: '#5bc172', backgoundcolor: '#e9f3f2', icon: DollarSign, expense: false },
}
