import fetch from 'node-fetch'
import { VRCError, VRCErrorMessage } from './vrc-error'
import { Config } from './interfaces';

export class VRChat {
  public apiKey: string
  public auth: string
  // public world: World;
  // public user: User;
  constructor(apiKey: string) {
    this.apiKey = apiKey
    this.auth = null
    // this.world = new World()
    // this.user = new User()
  }
  public login = async (username: string, password: string): Promise<boolean> => {
      if (this.auth) return true
      if(!username || !password) {
        throw new TypeError('Username or Password must be provided')
      }
      const dataBuffer: Buffer = Buffer.from(`${username}:${password}`);
      const authorization: string = dataBuffer.toString('base64');
      const response = await fetch('https://api.vrchat.cloud/api/1/auth/user', {
        headers: {
          Authorization: `Basic ${authorization}`
        }
      })
      if (response.ok) {
        this.auth = authorization
      }
      console.log(await response.json())
      return response.ok
  }

  public static async Initialize(): Promise<VRChat> {
      const response = await fetch('https://api.vrchat.cloud/api/1/config')
      const data: unknown = await response.json()
      if (response.ok) {
        const { apiKey } = data as Config
        return new this(apiKey)
      }
      throw new VRCError(response.status, data as VRCErrorMessage)
  }
}
