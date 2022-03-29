import { useState, useEffect } from 'react';

import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilters'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea/index';
import { InputArea } from './components/InputArea';
import { CalendarFilter } from './components/CalendarArea/index'

import Logo from './assets/images/logo.svg';
import Avatar from './assets/images/profile.png';

const App = () => {
  // Lista geral
  const [list, setList] = useState(items);
  // Lista filtrada
  const [filteredList, setFilteredList] = useState<Item[]>([])
  // Mês atual (selecionado)
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  // 
  const [income, setIncome] = useState(0);

  const [expense, setExpense] = useState(0);

  // Filtra apenas os registros do mês atual (selecionado)
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  // Altera o mês selecionado
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])

  return (
    <C.Container>

      <C.Header>
        <img src={Logo} />
        <C.HeaderText>Personal Finances</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* Área de filtros */}
        <CalendarFilter currentMonth={currentMonth} onMonthChange={handleMonthChange} />

        {/* Área de inserções*/}
        {/* <InputArea onAdd={handleAddItem} /> */}


        {/* Área de tabela de itens*/}
        <TableArea list={filteredList} />
      </C.Body>
      {/* Área de informações*/}
      <InfoArea income={income} expense={expense} />

    </C.Container >
  );
}

export default App;