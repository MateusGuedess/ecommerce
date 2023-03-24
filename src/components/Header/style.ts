'use client';

import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${(props) => {
    const grayshBlue = props?.theme?.neutral?.grayshBlue;
    const darkGrayshBlue = props?.theme?.neutral?.darkGrayshBlue;
    const orange = props?.theme?.primary?.base;

    return css`
      width: 1440px;
      height: 80px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid ${grayshBlue};

      .header__menu {
        display: flex;
        width: 100%;
        align-items: center;

        span:not(:first-child) {
          margin-left: 15px;
          font-size: 16px;
          color: ${grayshBlue};
          transition: border-bottom ease 0.3s;

          &:hover {
            border-bottom: 4px solid ${orange};
            margin-top: 4px;
            line-height: 76px;
            color: ${darkGrayshBlue}
            
          }
          }
        }
      }
    `;
  }}
`;
