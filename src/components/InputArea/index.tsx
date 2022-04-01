import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 3, 27),
            category: 'food',
            title: 'Item de Teste',
            value: 45.89,
        }
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>+ Novo item</button>
        </C.Container>
    );
}