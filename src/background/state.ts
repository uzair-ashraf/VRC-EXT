import { Storage } from './enums'
import { DeserializedState } from '../common'
import { Views } from '../common/enums/views';

export default class State {
  public view: Views
  public auth: string
  constructor() {
    this.view = Views.LOGIN
    this.auth = null
  }
  public setView(view: Views): void {
    this.view = view
  }
  public async save(): Promise<void> {
    return new Promise((resolve, reject) => chrome.storage.local.set({
      [Storage.STATE]: this
    }, () => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError)
      resolve()
    }))
  }
  public cleaned = (): DeserializedState => {
    const state = Object.assign({}, this)
    delete state.auth
    return state
  }
  public hasLoggedIn = (): boolean => {
    return !!this.auth
  }
  public static async Initialize(): Promise<State> {
    const data: {
      [key: string]: DeserializedState
    } = await new Promise(resolve => chrome.storage.local.get(Storage.STATE, resolve))
    console.log(data[Storage.STATE])
    if (!data[Storage.STATE]) return new this()
    return new this().initializeFromSerialized(data[Storage.STATE])
  }
  public initializeFromSerialized(state: DeserializedState): State {
    const { view } = state
    this.view = view
    return this
  }
}
