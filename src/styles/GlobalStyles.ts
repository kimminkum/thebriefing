import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* Pretendard FontFace */
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    -ms-overflow-style: none;
  }

  body.modal-open {
    overflow: hidden;
  }

  button, input, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }


  /* 유틸리티 클래스 */
  .font-16 { font-size: clamp(1rem, calc(100vw / 750 * 16), 1.2rem); }
  .font-18 { font-size: clamp(1.125rem, calc(100vw / 750 * 18), 1.375rem); }
  .font-20 { font-size: clamp(1.25rem, calc(100vw / 750 * 20), 1.5rem); }
  .font-24 { font-size: clamp(1.5rem, calc(100vw / 750 * 24), 2rem); }
  .font-28 { font-size: clamp(1.75rem, calc(100vw / 750 * 28), 2.25rem); }
  .font-32 { font-size: clamp(2rem, calc(100vw / 750 * 32), 2.5rem); }


  /* Swiper Customization */
  .swiper {
    overflow: visible;
  }

  .swiper-pagination {
    position: relative;
    margin-top: calc(50 / 750 * 100%);
    line-height: 1;
    font-size: 14px !important;
  }

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    z-index: 10;
  }

  .swiper-button-prev {
    left: 10px;

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
    right: 10px;

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

  /* Utility */
  .go3489369143 {
    display: none !important;
  }

  .slideauto {
    width: auto;
  }

  button {
    border: none;
    width: 100%;
    background-color: inherit;
    cursor: pointer;
    display: block;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
