import React, { FC, useEffect, useState } from 'react'

import { Messages, Views } from '../common/enums'
import { DeserializedState, Message } from '../common'
import { Credentials, Home, Layout, Loading, Login } from './views'

const App: FC = (): JSX.Element => {
  const [state, setState] = useState<DeserializedState>(new DeserializedState())

  const setView = async (view: Views): Promise<void> => {
    setState(
      await new Message(
        Messages.SET_VIEW,
        view
      ).send()
    )
  }
  const isLoggedIn = async (credentials: Credentials): Promise<boolean> => {
    return await new Message(Messages.LOGIN, credentials).send()
  }

  useEffect((): void => {
    (async () => {
      setState(await new Message(Messages.GET_STATE).send())
    })()
  }, [])
  console.log(state)
  const { view } = state

  return (
    <Layout>
      {
        (
          () => ({
            [Views.LOADING]: (): JSX.Element => (
              <Loading />
            ),
            [Views.HOME]: (): JSX.Element => (
              <Home
                setView={setView}
              />
            ),
            [Views.LOGIN]: (): JSX.Element => (
              <Login
                setView={setView}
                isLoggedIn={isLoggedIn}
              />
            ),
          }[view]())
        )()
      }
    </Layout>
  )
}

export default App
