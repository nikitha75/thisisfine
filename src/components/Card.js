import styled from "styled-components";

export const Card = styled.div`
    width: 200px;
    height: 280px;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 20px;
    padding: 20px 20px;
`;