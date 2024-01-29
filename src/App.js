import styled from 'styled-components';
import './App.css';
import img from '../src/img.jpg'
import mainImg from '../src/mainImg.jpg'

function App() {
  return (
    <Box>
      <MainImg src={img}/>
      <MainText>
        <p>
         현우 진주 우리 결혼합니다.
        </p>
        </MainText>
      <InfoBox>
        <Info>
          <div>윤상, 심혜진의 아들</div>
          <div>현우</div>
        </Info>
        <Info>
          <div>윤상, 심혜진의 아들</div>
          <div>서진주</div>
        </Info>
      </InfoBox>
      <Data>
        <div>2024년 04월 06일 토요일 </div>
        <div>오전 11시</div>
        <div>아현정</div>
      </Data>
      <Map>예식장 지도</Map>
      <MapData>
        <p>
          <div>예식장 주소</div>
          <div>대구광역시 동대구로 194-7 아현정 (황금동 660)</div>
        </p>
        <p>
          <div>주차 안내</div>
        </p>
      </MapData>
      <Num>계좌</Num>
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
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
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
  margin-top: 10px;
//이름 두껍게
}
`

const Data = styled.div`
div{
  margin: 10px;
}
`

const Map = styled.div`
width: 80%;
height: 150px;
border: 1px solid ;
margin-top: 30px;
`

const MapData = styled.div`
div{
  margin-top: 10px;
}
`

const Num = styled.div`
margin: 50px;
`



export default App;
