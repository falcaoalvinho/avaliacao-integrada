import styled from "styled-components";

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

export function Input({Value, Type }){
    return(
        <input style={{border: 'none'}} value={}>
            <p style={{color: "#fff",}}></p>
        </input>
    )
}


export default TableRow(props){
    return(
        <Row>
            <Cell>
                <p>{props.ID}</p>
            </Cell>
            <Cell>
                <Input>{props.Modelo}</Input>
            </Cell>
            <Cell>
                <Input>{props.Marca}</Input>
            </Cell>
            <Cell>
                <Input>{props.Ano}</Input>
            </Cell>
        </Row>
    )
}