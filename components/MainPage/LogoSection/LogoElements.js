import styled, { keyframes } from 'styled-components';

export const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #FFF;
    padding: 7rem 5rem;
    height: auto;
    width: 100%;
    align-items: center;

    @media screen and (max-width: 1200px) {
        padding: 6rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 5rem 3rem;
    }

    @media screen and (max-width: 480px) {
        padding: 4rem 0.5rem;
    }
`;

export const SliderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    text-align: center;
    width: 100%;
    max-width: 75rem;
    height: auto;
`;

export const SliderHeader = styled.h3`
    font-size: 1.5rem;
    text-align: left;
    color: #6961FF;
    padding-left: 1rem;
    font-weight: 600; 
`;

export const SliderTitle = styled.h2`
    font-size: 3rem;
    color: #000;
    text-align: left;
    line-height: 4.5rem;
    padding: 1.5rem 1rem;
    transition: all 0.5s ease-in-out;
    width: 70%;
    max-width: 75rem;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 2.2rem;
        line-height: 3rem;
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem;
        line-height: 2.5rem;
        width: 100%;
    }
`;

export const Slider = styled.div`
    height: auto;
    position: relative;
    width: 100%;
    text-align: center;
    display: grid;
    place-items: center;
    overflow: hidden;
    max-width: 75rem;

    &:before, &:after {
        background: linear-gradient(to right, #fff 0%,
        rgba(255,255,255,0) 100%);
        content: '';
        height: 100%;
        position: absolute;
        width: 5%;
        z-index: 2;
      };

      &:before {
          left: 0;
          top: 0;
      };

      &:after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    };


`;

const Scroll = keyframes`
    {
        0% {
            transform: translateX(0);
        }
        100% {
            // Calculate by setting = -(avg length of logos + 3) x no. of logos
            transform: translateX(calc(-6rem * 15));
        }
    }
`; 

export const SliderTrack = styled.div`
    display: flex;
    width: calc(7rem * 30); //set to logo length x no. of logos x 2
    animation: ${Scroll} 40s linear infinite;
`;


export const Slide = styled.div`
    height: auto;
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;

export const LogoImage = styled.div`
    height: 4rem;
    width: 4rem;
    margin: 1rem 0;
`;