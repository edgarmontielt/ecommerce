import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 48px auto;
    background-color: white;
    width: 80%;
    height: 600px;
    border-radius: 5px;
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    padding: 2.5rem 5rem;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: #37374a;
    margin-bottom: 5rem;
`