import React from 'react'
import { Style, styled } from 'stylerun'
import { useModel } from '@reatom/react'
import {
  nameAtom,
  onNameChange,
  passwordAtom,
  onPasswordChange,
  onSubmit,
} from './Auth/model'

const Container = styled('main')

export const Auth = () => {
  const {
    name,
    password,
    handleNameChange,
    handlePasswordChange,
    handleSubmit,
  } = useModel(() => ({
    name: nameAtom,
    handleNameChange: onNameChange,
    password: passwordAtom,
    handlePasswordChange: onPasswordChange,
    handleSubmit: onSubmit,
  }))

  return (
    <Container>
      <form className="nes-container with-title" onSubmit={handleSubmit}>
        <h2 className="title">Auth</h2>
        <div className="nes-field">
          <label>Name:</label>
          <input
            className="nes-input"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your nickname"
            name="name"
            type="text"
            minLength={3}
            required
            autoFocus
          />
        </div>
        <br />
        <div className="nes-field">
          <label>Password:</label>
          <input
            className="nes-input"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={4}
            required
          />
        </div>
        <br />
        <button className="nes-btn is-primary" type="submit">
          Submit
        </button>
      </form>
      <Style>{`
        ${Container} { 
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        ${Container} button {
          float: right;
        }
      `}</Style>
    </Container>
  )
}
