import React from 'react';
import { styled, media } from '../styles';

export default styled.section`
    ${media.desktop`
        height: 360px;
    `};

    ${media.mobile`
        display: none;
    `}

    width: 100%;
    margin: 60px 0;

    background-color: ${p => p.theme.mainBackground};
    ${p => p.theme.fontSizeText};
    
    border-radius: 4px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);

    text-align: ${p => p.direction};
    position: relative;

    > :first-child {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        overflow: hidden;

        border-radius: 4px;
    }

    > :not(:first-child) {
        z-index: 1;
        position: relative;
        float: ${p => p.direction};
        clear: both;

        ${media.desktop`
            width: 708px;
        `}
    }

    > h3 {
        padding: 33px 30px 30px;

        ${p => p.theme.fontSizeSubheading};
        color: ${p => p.theme.popColor};

        font-weight: bolder;
        text-transform: uppercase;
    }

    p {
        padding: 0 30px 29px;
        ${p => p.theme.fontSizeText};
        color: ${p => p.theme.mainColor};
        line-height: 1.45;
    }
`;