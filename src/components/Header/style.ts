'use client';

import styled from 'styled-components';

export const Container = styled.section`
  width: 1440px;
  height: 80px;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props?.theme?.neutral?.grayshBlue}`};

  .header__menu {
    display: flex;
    width: 100%;
    align-items: center;

    span:not(:first-child) {
      margin-left: 15px;
      font-size: 16px;
      color: ${(props) => props?.theme?.neutral?.grayshBlue};
    }
  }
`;
