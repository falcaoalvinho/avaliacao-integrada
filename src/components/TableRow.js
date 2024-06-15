import styled from "styled-components";

import BaseButton from "./BaseButton.js";
import Input from './Input.js'

export const Cell = styled.td`
    border-style: solid;
    border-width: 1px;
    border-color: #6e7681;
    border-collapse:collapse;
    padding: 15px;
`;

export const Row = styled.tr`
    border-style: solid;
    border-width: 1px;
    border-color: #6e7681;
    border-collapse:collapse;

    font-weight: 500;
    font-size: 20px;
    color: #fff;
`;

export function TableRow({ID, Modelo, Marca, Ano, onChange, Update, Delete}){
    return(
        <Row>
            <Cell>
                <p>{ID}</p>
            </Cell>
            <Cell>
                <Input onChange={() => onChange} Value={Modelo} Type='text'/>
            </Cell>
            <Cell>
                <Input onChange={() => onChange} Value={Marca} Type='text'/>
            </Cell>
            <Cell>
                <Input onChange={() => onChange} Value={Ano} Type='number'/>
            </Cell>
            <Cell>
                <BaseButton Update={Update} Text='Atualizar'/>
            </Cell>
            <Cell>
                <BaseButton Delete={Delete} Text='Excluir'/>
            </Cell>
        </Row>
    )
}