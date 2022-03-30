import {StyledIcon} from 'styled-icons/types'

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        backgoundcolor: string;
        icon: StyledIcon;
        expense: boolean;
    }
}