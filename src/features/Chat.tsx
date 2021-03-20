import React from 'react'
import { Style, styled } from 'stylerun'
import { useModel } from '@reatom/react'
import * as model from './Chat/model'

const Container = styled(`main`)
const Form = styled(`form`)

export const Chat = () => {
  const { initChat, sendMessage, messages } = useModel(() => model)

  React.useEffect(() => {
    initChat()
  }, [])

  return (
    <Container>
      <section className="nes-container">
        <section className="message-list">
          {messages.map(({ data, isSelfMessage }, index) => {
            const direction = isSelfMessage ? `-right` : `-left`
            return (
              <section className={`message ${direction}`}>
                {!isSelfMessage && <i className="nes-bcrikko"></i>}
                <div key={index} className={`nes-balloon from${direction}`}>
                  <p>{data}</p>
                </div>
                {isSelfMessage && <i className="nes-bcrikko"></i>}
              </section>
            )
          })}
        </section>
      </section>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          const input = e.currentTarget.querySelector('textarea')!
          sendMessage(input.value)
          input.value = ''
        }}
      >
        <textarea placeholder="Type a message..."></textarea>
        <button type="submit">Send</button>
      </Form>
      <Style>{`
        ${Container} {
          display: flex;
          flex-direction: column;
          width: 100vw;
          padding: 2rem calc((100vw - 50rem) / 2);
          height: 100vh;
        }
        ${Container} section {
          flex: 1;
          overflow: auto;
          word-break: break-all;
        }
        ${Form} {
          display: flex;
        }
        ${Form} textarea {
          flex: 1;
        }
      `}</Style>
    </Container>
  )
}

export default Chat
