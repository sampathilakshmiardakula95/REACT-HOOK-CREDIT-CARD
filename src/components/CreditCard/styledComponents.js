// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #000000;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 600px;
  width: 400px;
  background-color: #344e7a;
  padding: 20px;
  border: 1px solid;
`
export const CardHeading = styled.h1`
color:#ffffff;
font-size:20px;
font-family:'Roboto'
font-weight:bold;

`

export const WhiteCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid;
`
export const BackgroundImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 260px;
  width: 350px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`
export const CardHolderName = styled.p`
color:#ffff;
font-family:'Roboto'
font-size:12px;
font-weight:300;
margin-top:50px;
display:flex;
justify-content:flex-start;
align-items:flex-end;
`
export const CardDetails = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
`
export const InputContainer = styled.input`
  height: 30px;
  width: 200px;
  border: 1px solid #475569;
  font-size: 14px;
  margin: 12px;
  padding: 12px;
`
export const CardDetailsName = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const CardDetailsNumber = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
`
