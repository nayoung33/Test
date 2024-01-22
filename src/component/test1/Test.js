import React, { useState } from 'react'
import { Container, LeftBox, RightBox, LeftMiniBox, LeftTop, LeftBottom } from './styles'
import Car from '../car/Car';

const Test = () => {

    const [test, setTest] = useState(0);

    const click = () => {
        setTest(1);
    }

    const AA = () => {
        setTest(2);
    }
    const BB = () => {
        setTest(3);
    }

  return (
    <Container>
        <LeftBox>
        <LeftTop>
            <LeftMiniBox style={{backgroundColor: test == 1 && "orange"}} onClick={click}>자동차</LeftMiniBox>
            <LeftMiniBox style={{backgroundColor: test == 2 && "orange"}} onClick={AA}>웹툰</LeftMiniBox>
            <LeftMiniBox style={{backgroundColor: test == 3 && "orange"}} onClick={BB}>패션뷰티</LeftMiniBox>
            <LeftMiniBox>레시피</LeftMiniBox>
            <LeftMiniBox>리빙</LeftMiniBox>
            <LeftMiniBox>책방</LeftMiniBox>
            <LeftMiniBox>건강</LeftMiniBox>
        </LeftTop>
        <LeftBottom>
            {test == 1 && <Car />}
            {test == 2 && <div>웹툰</div>}
            {test == 3 && <div>패션뷰티</div>}
        </LeftBottom>

        </LeftBox>
        <RightBox></RightBox>
    </Container>
  )
}

export default Test