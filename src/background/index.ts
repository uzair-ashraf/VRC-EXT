import State from './state'
import { Messages, Views } from '../common/enums'
import { Message } from '/common'
import { VRChat } from './vrchat'

class Background {
  private state: State
  private vrchat: VRChat
  constructor(state: State, vrchat: VRChat) {
    this.state = state
    this.vrchat = vrchat
  }
  public addListeners(): void {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this))
  }
  public async handleMessage({ action, payload }: Message, _: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): Promise<void> {
    try {
      const actions: {
        [key: string]: () => Promise<void>
      } = {
        [Messages.SET_VIEW]: async () => {
          const { view } = payload
          this.state.view = view as Views
          await this.state.save()
          sendResponse(this.state.cleaned())
        },
        [Messages.GET_STATE]: async () => {
          sendResponse(this.state.cleaned())
        },
        [Messages.LOGIN]: async () => {
          const { username, password } = payload
          if( !username || !password ) {
            return sendResponse(false)
          }
          const hasLoggedIn = await this.vrchat.login(username, password)
          if (hasLoggedIn) {
            this.state.auth = this.vrchat.auth
          }
          sendResponse(hasLoggedIn)
        },
      }
      await actions[action]()
    } catch(err) {
      console.error(err)
      sendResponse(null)
    }
  }
  public static async Initialize(): Promise<void> {
    const state = await State.Initialize()
    const vrchat = await VRChat.Initialize()
    if(state.auth) {
      vrchat.auth = state.auth
    }
    const background = new this(state, vrchat)
    background.addListeners()


    // @ts-ignore
    window.background = background
  }
}

Background.Initialize()
