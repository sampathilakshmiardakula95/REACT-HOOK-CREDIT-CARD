// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  CardHeading,
  WhiteCardContainer,
  BackgroundImage,
  CardDetails,
  Heading,
  InputContainer,
  CardDetailsName,
  CardDetailsNumber,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onChangeName = event => {
    setName(event.target.value.toUpperCase())
  }

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <BackgroundImage data-testid="creditCard">
          <CardDetailsNumber>{number}</CardDetailsNumber>
          <CardDetails>CARDHOLDER NAME</CardDetails>
          <CardDetailsName>{name}</CardDetailsName>
        </BackgroundImage>
      </CreditCardContainer>
      <WhiteCardContainer>
        <Heading>Payment method</Heading>
        <InputContainer
          placeholder="Cardholder Name"
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <InputContainer
          placeholder="Enter Card Number"
          type="text"
          value={number}
          onChange={onChangeNumber}
        />
      </WhiteCardContainer>
    </AppContainer>
  )
}

export default CreditCard
