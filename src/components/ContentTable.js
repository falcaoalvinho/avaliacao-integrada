import styled from 'styled-components';

const Table = styled.table`
        margin: 30px 0px;

        border-style: solid;
        border-width: 1px;
        border-color: #6e7681;
        border-collapse:collapse;

        font-family: 'Poppins', sans-serif;
        color: #6e7681;

        background-color: #0d1117;
`;

export function ContentTable({Header, Body}) {
    return (
        <Table>
        {Header}
        {Body}
        </Table>
        )
    }