import State from './state'
import { Messages, Views } from '../common/enums'
import { Message } from '/common'

class Background {
  private state: State
  constructor(state: State) {
    this.state = state
  }
  public addListeners(): void {
    chrome.runtime.onMessage.addListener(this.handleMessage.bind(this))
  }
  public async handleMessage({ action, payload }: Message, _: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): Promise<void> {
    const actions: {
      [key: string]: () => Promise<void>
    } = {
      [Messages.SET_VIEW]: async () => {
        const { view } = payload
        this.state.view = view as Views
        await this.state.save()
        sendResponse(this.state)
      },
      [Messages.GET_STATE]: async () => {
        sendResponse(this.state)
      },
    }
    await actions[action]()
  }
  public static async Initialize(): Promise<void> {
    const state = await State.Initialize()

    const background = new this(state)
    background.addListeners()


    // @ts-ignore
    window.background = background
  }
}

Background.Initialize()
