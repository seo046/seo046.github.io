import styled from 'styled-components';
import icon from './Img/icon/free-icon-copy-content-60990.png';


const handleCopyClipBoard = async (text) => {
	try {
		await navigator.clipboard.writeText(text);
		alert("복사되었습니다.");
	} catch (err) {
		console.log(err);
	}
};

const ModalH = ( male ) => {


    return (
    <ModalBox className='infoBox'>
      {male ? (
        <Data> 
            <Info>
              <p></p>
              <p>신한 110-257-975501</p>
              <p>이현우</p>
              <p onClick={()=>handleCopyClipBoard('신한 110-257-975501 이현우')}><img src={icon} alt='icon'/></p>
            </Info>
            <Info>
              <p>父</p>
              <p>하나 513-910008-36508</p>
              <p>이용섭</p>
              <p onClick={()=>handleCopyClipBoard('하나 513-910008-36508 이용섭')}><img src={icon} alt='icon'/></p>
            </Info>
            <Info>
              <p>母</p>
              <p>대구 249-13-116837</p>
              <p>이복성</p>
              <p onClick={()=>handleCopyClipBoard('대구 249-13-116837 이복성')}><img src={icon} alt='icon'/></p>
            </Info>
        </Data>): null}
      </ModalBox>
    )
        
}

export default ModalH;

const ModalBox = styled.div`
border: 4px solid  #311D00;;
width: 370px;
height: 180px;
border-radius: 15px;
margin-bottom: 30px;
`
 
const Data = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: left;
`

const Info = styled.div`
width: 330px;
padding: 0 10px;
margin-top: 5px;
display: flex;
align-items: center;
text-align: left;
img{
  width: 15px;
  height: 15px;
  margin: 0 10px
}
p:nth-child(1){
  margin-right: auto;
  width: 30px;
}
p:nth-child(2){
  margin-right: auto;
}
p:nth-child(3){
  margin-left: auto;
}
`
