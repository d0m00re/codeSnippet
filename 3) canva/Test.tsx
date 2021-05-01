import React, { ReactElement, useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width : 100px;
    height: 100px;
`;

interface Props {
    
};

function Test({}: Props): ReactElement {
    const refCanvas = useRef(null);

    useEffect(() => {
        //                let canvas : HTMLCanvasElement | null = refCanvas.current;

                let canvas : any = refCanvas.current; //  if (canvas === null)
               //     return ;
                let context : CanvasRenderingContext2D = canvas.getContext('2d');
                context.beginPath();
                context.arc(50, 50, 50, 0, 2 * Math.PI);
                context.fill();
            });

    return (
        <Div>
            <canvas ref={refCanvas} id="tutoriel" width="200" height="200"></canvas>
        </Div>
    )
}

export default Test
