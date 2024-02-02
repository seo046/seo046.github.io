

const modal = () => {

// 팝업 이미지로 복사할 수 있게 띄우기

    return (
    <Num>
        <Male onClick={onClcikMale}>
          <span>신랑측 계좌번호 <img src={icon}/> </span>
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
    )
        
}

export default modal;