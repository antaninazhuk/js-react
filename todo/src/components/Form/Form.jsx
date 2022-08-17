import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
    width: 500px;
    margin: 20px;
    margin-inline: auto;
    padding: 20px;
    background-color: #2a2d56;
    display: flex;
    flex-direction: column;
    `

const Input = styled.input`
    margin: 10px 0 10px 5px;
    `
const Select = styled.select`
    margin: 10px 0 10px 5px;
    `
const Text = styled.p`
    font-size: 10px;
    color: yellow
    `

export default function Form({handleAdd}){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);


  const birthdayRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

  useEffect( () => {
    if (firstName.length && lastName.length && country.length && agree) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }, [firstName, lastName, country, agree]
  )


  const handleSubmit = (event) => {
    event.preventDefault();
 
    const data = {
        firstName,
        lastName,
        birthday,
        country
    };
    handleAdd(data);
    setFirstName('');
    setLastName('');
    setBirthday('');
    setCountry('');
    setAgree(false);
    
    console.log('Form received');
  }


  return (
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Name
        <Input 
        type="text" 
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      {!firstName.length && <Text>Имя должно быть не менее 1 символа</Text>}
      <label htmlFor="lastName">
        Surname
        <Input 
        type="text" 
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      {!lastName.length && <Text>Фамилия должна быть не менее 1 символа</Text>}
      <label htmlFor="birthday">
        Birthday
        <Input 
        type="text" 
        value={birthday}
        onChange={(event) => setBirthday(event.target.value)}
        
        />
      </label>
      {!birthdayRegex.test(birthday) && <Text>Введите корректную дату рождения в формате ДД/ММ/ГГГГ</Text>}
      <label htmlFor="coutry">
        Country
        <Select 
          name="country"
          value={country}
          onChange={(event => setCountry(event.target.value))}
          >
          <option value=""></option>
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="USA">USA</option>
       </Select>
      </label>
      {!country.length && <Text>Выберите страну</Text>}
      <label htmlFor="agree">
        I agree with...
        <Input 
        type="checkbox" 
        checked={agree}
        onChange={(event) => setAgree(prev => !prev)}
        />
      </label>
      {!agree && <Text>Проставьте согласие</Text>}
    
      <button disabled={!formValid}>SEND</button>
    </FormWrapper>
  )
}