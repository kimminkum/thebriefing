import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', 'AppleSDGothicNeoR00' ,'Apple SD Gothic' ,sans-serif;
    -ms-overflow-style: none;
  }

  body.modal-open {
    overflow: hidden;
  }
  
  a {
      text-decoration: none;
      color: inherit;
  }
  li {
    list-style: none;
  }

  .flex {
    display: flex;
  }

  .fix {
    position: relative;
  }


  .ctns {
    width: 100%;
    min-width: 1240px;
    max-width: 1920px;
    margin: 0 auto;
    text-align: left;
    font-family: Pretendard, 'Malgun Gothic', 'SF Pro', AppleSDGothicNeo, HelveticaNeue, helvetica, sans-serif;
    color: #000;
    font-weight: 400;
    letter-spacing: -0.02em;
    overflow: hidden;
  }

  .font-16 {
    font-size: clamp(12px, calc(16 / 750 * 100%), 16px);
    line-height: calc(26 / 16);
  }
  .font-20 {
    font-size: clamp(14px, calc(20 / 750 * 100%), 20px);
    line-height: calc(30 / 20);
  }
  .font-24 {
    font-size: clamp(16px, calc(24 / 750 * 100%), 24px);
    line-height: calc(34 / 24);
  }
  .font-32 {
    font-size: clamp(20px, calc(32 / 750 * 100%), 32px);
    line-height: calc(44 / 32);
  }


  .swiper{
    overflow: visible;
  }
  .swiper-pagination {
    position: relative;
    margin-top: 10px;
  }

  .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    z-index: 10;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 16px;
      height: 16px;
      transform: rotate(-45deg);
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  }
  .swiper-button-next {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    z-index: 10;
    
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 5px;
      transform: rotate(135deg);
      width: 16px;
      height: 16px;
      border-top: 2px solid #fff;
      border-left: 2px solid #fff;
    }
  }
  
  button {
    border: none;
    width: 100%;
    display: block;
    background-color: inherit;
    cursor: pointer;
  }

  img {
    width: 100%;
    display: block;
  }

  .slideauto {
    width: auto;
  }
`;

export default GlobalStyle;
