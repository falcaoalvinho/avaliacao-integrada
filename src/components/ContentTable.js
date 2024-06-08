import styled from 'styled-components';

const Table = styled.table`
        margin-top: 30px;

        border-style: solid;
        border-width: 1px;
        border-color: #6e7681;
        border-collapse:collapse;

        font-family: 'Poppins', sans-serif;
        color: #6e7681;

        background-color: #0d1117;
`;

export function ContentTable({Children}) {
    return <Table>{Children}</Table>;
    }