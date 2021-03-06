import styled from "styled-components"

export const ContributorsBox = styled.div`
  width: 67%;
  height: 76%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
    height: 80%;
    padding-bottom: 35px;
    margin-bottom: 40px;
  }
`

export const ContributorsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 85%;
  height: 70%;
  background-color: #282c35;
  margin: 0 auto;
  overflow-y: auto;
  margin-bottom: 20px;

  background: #373c48;
  border-radius: 5px;
  padding: 20px;

  ::-webkit-scrollbar {
    padding: 10px 0;
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #373c48;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(255, 153, 0);
    border-radius: 20px;
  }

  & a {
    text-decoration: none;
    color: #000;
    display: flex;
    justify-content: center;

    & svg {
      padding: 9px;
      color: #fff;
    }
  }

  & img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`

export const ContributorsTitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  padding: 7px;
  color: #efe0e0;

  &::after {
    content: "";
    height: 7px;
    width: 5%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: #bd8f65;
  }
`

export const Author = styled.span`
  display: block;
  color: #efe0e0;
  padding-top: 7px;
`

export const Box = styled.span`
  margin: 35px;
  border: 2px solid rgb(255, 153, 0);
  padding: 20px;
  border-radius: 4px;
  height: auto;
  margin-bottom: auto;

  & img {
    object-fit: cover;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
`
