export interface Player {
    key: number;
    name: string;
    team: string;
    cost: string;
}

export interface FormProps {
    name: string;
    footsize: number;
    color: string;
    manufacturer: string;
}

export type ModalFormProps = {
    finishForm: () => void;
};

export interface Pokemon {
    name: string;
    abilities: Ability[];
    sprites: { front_default: string };
}
export interface Ability {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
}
export interface FormData {
    nickname: string;
    ability: string;
}

export interface PlayerTable {
    key: number;
    name: string;
    team: string;
    cost: number;
}
