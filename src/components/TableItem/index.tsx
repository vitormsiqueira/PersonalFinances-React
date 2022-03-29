import * as C from './styles';
import { Item } from '../../types/Item'
import { formateDate } from '../../helpers/dateFilters'
import { categories } from '../../data/categories';
import { LogOut } from 'react-feather';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.Container>
            <C.TableLine>

                <C.TableColumn>
                    <C.Category color={categories[item.category].color}>
                        {categories[item.category].title}
                    </C.Category>
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