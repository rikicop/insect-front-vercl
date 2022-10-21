import styled from "styled-components";

export const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    grid-gap: 2rem;
    padding-top: 4rem; ;
    justify-content: center;
`;

export const CardContainer = styled.div`
overflow: hidden;
box-shadow: 0 2px 20px rgba(73, 68, 68, 0.26);
border-radius: 0.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
cursor: pointer;
transition: transform 0.2s ease-in-out;
.card_body{
    .card_img{
        position: relative;
        width: 100%;
        height: 12rem;
        object-fit: cover;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: scale(1.05);
        }
    }
    .card_tile{
        font-size: 1.5rem;
        padding: 1rem;
    }
    .card_description{
        padding: 0 1rem 1rem 1rem;
        font-size: 1rem;
    }
    .card_button{
        display: block;
        width: 100%;
        padding: 1rem;
        text-align: center;
        background-color: #000;
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
        &:hover{
            background-color: #089a0b;
            color: #f0ebeb;
        }
    }
}
`;


export const CardButton = styled.button`
    background-color: #149e0a;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`;

