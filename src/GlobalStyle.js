import { createGlobalStyle } from 'styled-components';
import nanumMyeongjo from '../public/fonts/NanumMyeongjoBold.ttf';
import BookkMyungjoBd from '../public/fonts/BookkMyungjo-Bd.woff';





const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Nanum Myeongjo";
  font-weight: 700;
  src: url(${nanumMyeongjo})  format("truetype");
  }
  
/* 
  @font-face {
  font-family: "Roboto Regular";
  font-weight: 400;
  src: url("./fonts/Roboto-Regular.ttf") format("truetype");
  }
  
  @font-face {
  font-family: "Roboto Medium";
  font-weight: 500;
  src: url("./fonts/Roboto-Medium.ttf") format("truetype");
  }
  
  @font-face {
  font-family: "Roboto Bold";
  font-weight: 700;
  src: url("./fonts/Roboto-Bold.ttf") format("truetype");
  }
  

  @font-face {
  font-family: "NanumSquare";
  src: url("./fonts/Roboto-Regular.ttf") format("truetype");
  } */

  @font-face {
    font-family: 'BookkMyungjo-Bd';
    src: url(${BookkMyungjoBd}) format('woff');
    font-weight: 700;
    font-style: normal;
  }

`

export default GlobalStyle;