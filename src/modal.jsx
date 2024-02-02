import styled from 'styled-components';

const Modal = (male, female, setMale, setFemale ) => {

const onClcikMale = () => {
  setMale(male=>!male);
}
const onClcikFemale = () => {
  setFemale(female=>!female);
}

// 팝업 이미지로 복사할 수 있게 띄우기

    return (
    <Num>
        <Male onClick={onClcikMale}>
          {male ? (
            <div>
            <p>본인 신한 110-257-975501 이현우</p>
            <p>부 하나 513-910008-36508 이용섭</p>
            <p>모 대구 249-13-116837 이복성</p>
            <p>성함 클릭시 계좌번호가 복사 됩니다.</p>
          </div>
          ): null}
        </Male>
        <Female onClick={onClcikFemale} > 
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
    )
        
}

export default Modal;

const Num = styled.div`
position: relative;
top: 50px;
`
const Male = styled.div`
position: relative;
top: 150px;
left: 0;
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
span{
  display: flex;
  align-items: center;
  img{
  width: 13px;
  height: 12px;
  margin-right:10px;
}
}

` 
const Female = styled.div`
position: relative;
top: 50px;
left: 0;
display: flex;
flex-direction: column;
align-items: flex-start;
text-align: left;
margin-top: 20px;
p{
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
}
span{
  display: flex;
  align-items: center;
  img{
  width: 13px;
  height: 12px;
  margin-right:10px;
}
}
`