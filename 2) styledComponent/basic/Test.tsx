import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width : 100px;
    height: 100px;
    background-color : red;
`;

interface Props {
    
};

function Test({}: Props): ReactElement {
    return (
        <Div>
            <canvas id="tutoriel" width="150" height="150"></canvas>
        </Div>
    )
}

export default Test
