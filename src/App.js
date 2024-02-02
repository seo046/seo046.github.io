import styled from 'styled-components';
import img from '../public/img/img.jpg';
import mainImg from '../public/img/mainImg.jpg';
import mapImg from '../public/img/map.png';
import { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
const [male, setMale] = useState(false);
const [female, setFemale] = useState(false);
const onClcikMale = () => {
  setMale(male=>!male);
}
const onClcikFemale = () => {
  setFemale(female=>!female);
}

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: false,
  prevArrow: false,
  arrows: false,
};

  return (
    <Box>
      <Top>
        <MainImg src={img}/>
        <MainText>현우 진주 우리 결혼합니다.</MainText>
        <InfoBox>
          <Info>
            <div>이용섭•이복성의 아들</div>
            <div style={{fontWeight:'bold'}}>이현우</div>
          </Info>
          <Info>
            <div>서병환•정미영의 딸</div>
            <div style={{fontWeight:'bold'}}>서진주</div>
          </Info>
        </InfoBox>
        <Data>
          <div>2024년 04월 06일 토요일 </div>
          <div>오전 11시</div>
          <div>아현정</div>
        </Data>
      </Top>
      <Bottom>
      <Map>
        <a href='https://naver.me/FmgVoXAc' target='_blank'><img src={mapImg}/></a>
        <p style={{fontSize:'12px', color:'gray'}}>이미지 클릭시 네이버 지도로 연결됩니다.</p>
        <p className='box'>
          <p>예식장 주소</p>
          <div>대구광역시 수성구 동대구로 194-7 <b>아현정</b> (황금동 660)</div>
          <p>주차안내</p>
          <p>어린이회관 공영주차장 (2시간 무료주차) <br/>대구 수성구 황금동 635-6</p>
        </p>
      </Map>
      <div>마음 전해주실 곳 </div>
      <Num>
        <Male onClick={onClcikMale}>신랑측 계좌번호
          {male ? (
            <div>
            <p>본인 신한 110-257-975501 이현우</p>
            <p>부 하나 513-910008-36508 이용섭</p>
            <p>모 대구 249-13-116837 이복성</p>
            <p>성함 클릭시 계좌번호가 복사 됩니다.</p>
          </div>
          ): null}
        </Male>
        <Female onClick={onClcikFemale} > 신부측 계좌번호
        {female ? (
            <div>
            <p>본인 신한 110-463-549357 서진주</p>
            <p>부 농협 823-12-139643 서병환</p>
            <p>모 농협 302-0480-5680-01 정미영</p>
            <p>성함 클릭시 계좌번호가 복사 됩니다.</p>
          </div>
          ): null}
        </Female>
      </Num>
      </Bottom>
      {/* <Slider {...settings}>
        <InnerText>
          <img src={mainImg}/>
        </InnerText>
        <InnerText>
        <img src={mapImg}/>
        </InnerText>
        <InnerText>
        <img src={img}/>
        </InnerText>
      </Slider> */}
      <Img src={mainImg}/>
    </Box>
  );
}

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
width: 100%;
height: 100%;
font-family: "Nanum Myeongjo", serif;
color: #311D00;
`
const Top = styled.div`
font-family: "Nanum Myeongjo", serif;
`
const Bottom = styled.div`
  font-family: "Noto Sans KR", sans-serif;
`
const MainImg = styled.img `
  width: 100%;
  height: 100%;

`
const Img = styled.img`
  width: 70%;
  height: 70%;
  margin-bottom: 50px;
`

const MainText = styled.div`
margin-top: 50px;
line-height: 35px;
font-weight: 300;
p{
  margin-top: 20px;
}
`

const InfoBox = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
margin: 50px 0;
`

const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
div{
  margin-top: 15px;
}
`

const Data = styled.div`
div{
  margin: 10px;
}
`

const Map = styled.div`
height: 100%;
margin-top: 30px;
display: flex;
flex-direction: column;
align-items: center;
img{
  width: 80%;
  height: 80%;
}
.box{
  margin-top: 40px;
}
`

const Num = styled.div`
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
margin-right: auto;
margin-left: 50px;
margin-bottom: 20px;
`
const Male = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
p{
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
}
` 
const Female = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
margin-top: 15px;
p{
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
}
`
const InnerText = styled.div`
width: 100px;
height: 100px;
border: 1px solid beige;
display: flex;
img{
  width: 100px;
  height: 50px;
}
`


export default App;
