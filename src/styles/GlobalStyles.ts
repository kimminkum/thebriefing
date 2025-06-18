import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
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

  .font-16 {
    font-size: clamp(12px, calc(16 / 750 * 100vw), 16px);
    line-height: calc(20 / 16);
  }
  .font-18 {
    font-size: clamp(13px, calc(18 / 750 * 100vw), 18px);
    line-height: calc(24 / 18);
  }
  .font-20 {
    font-size: clamp(14px, calc(20 / 750 * 100vw), 20px);
    line-height: calc(32 / 20);
  }
  .font-22 {
    font-size: clamp(15px, calc(24 / 750 * 100vw), 22px);
    line-height: calc(34 / 24);
  }
  .font-24 {
    font-size: clamp(16px, calc(24 / 750 * 100vw), 24px);
    line-height: calc(34 / 24);
  }
  .font-28 {
    font-size: clamp(18px, calc(24 / 750 * 100vw), 28px);
    line-height: calc(36 / 24);
  }
  .font-32 {
    font-size: clamp(20px, calc(32 / 750 * 100vw), 32px);
    line-height: calc(48 / 32);
  }

  .go3489369143 {
    display: none !important;
  }


  .swiper{
    overflow: visible;
  }
  .swiper-pagination {
    position: relative;
    margin-top: calc(50 / 750 * 100%);
    line-height: 1;
    font-size: 14px !important;
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
