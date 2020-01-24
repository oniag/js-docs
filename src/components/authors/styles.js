import React from 'react';
import styled from 'styled-components';

export const AuthorsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 405px;
    height: 155px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 100px;
`;

export const AuthorsBox = styled.div`
    display: flex;
    height: 75%;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 12px;
`;

export const AuthorsText = styled.p` 
    text-align: center;
    color: #000;
`;

export const AuthorsDescription = styled.p` 
    text-align: center;
    color: #000;
`;

export const AuthorsContentBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
`;

export const AuthorsImage = styled.img` 
    border-radius: 50%;
    width: 100px;
    height: 100px;
`;

export const AuthorsGit = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;
    height: 100%;
    color: #000;
`;
