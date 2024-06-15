import styled from "styled-components"

const Header = styled.thead`
    border-style: solid;
    border-width: 1px;
    border-color: #6e7681;
    border-collapse:collapse;
`;

const Column = styled.th`
    border-style: solid;
    border-width: 1px;
    border-color: #6e7681;
    border-collapse:collapse;

    padding: 15px;

    font-weight: 500;
    font-size: 20px;
    color: #fff;

    background-color: #010409;
`;

export default function TableHeader({}) {
    return (
        <Header>
            <tr>
                <Column/>
                <Column>
                    <p>Modelo</p>
                </Column>
                <Column>
                    <p>Marca</p>
                </Column>
                <Column>
                    <p>Ano</p>
                </Column>
                <Column/>
                <Column/>
            </tr>
        </Header>
    )
}