import * as C from './styles';
import { ResumeItem } from '../ResumeItem';

type Props = {
    income: number;
    expense: number;
}

export const InfoArea = ({ income, expense }: Props) => {
    income = parseFloat(income.toFixed(2))
    expense = parseFloat(expense.toFixed(2))
    const balance = parseFloat((income - expense).toFixed(2))
    return (
        <C.Container>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={balance} />
            </C.ResumeArea>
        </C.Container>
    );
}