import React, { FC, useEffect, useState } from 'react'

import { Messages, Views } from '../common/enums'
import { DeserializedState, Message } from '../common'
import { Home, Layout, Loading, Login } from './views'

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

              />
            ),
          }[view]())
        )()
      }
    </Layout>
  )
}

export default App
