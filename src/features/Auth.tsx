import React from 'react'
import Router from 'next/router'
import { Style, styled } from 'stylerun'
import { useModel } from '@reatom/react'
import * as model from './Auth/model'

const Container = styled('main')

export const Auth = () => {
  const { submit, login, setLogin, password, setPassword } = useModel(
    () => model,
  )

  return (
    <Container>
      <form className="nes-container with-title" onSubmit={submit}>
        <h2 className="title">Auth</h2>
        <div className="nes-field">
          <label>Email:</label>
          <input
            className="nes-input"
            value={login}
            onChange={setLogin}
            type="email"
            placeholder="email"
            autoComplete="new-password"
            autoFocus
            required
          />
        </div>
        <div className="nes-field">
          <label>Password:</label>
          <input
            className="nes-input"
            value={password}
            onChange={setPassword}
            type="password"
            placeholder="password"
            required
            minLength={6}
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
