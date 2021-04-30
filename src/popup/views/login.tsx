import React, { FC, useState } from "react";
import { Views } from "../../common/enums";

export interface Credentials {
  username: string;
  password: string;
}

interface LoginProps {
  setView(view: Views): void;
  isLoggedIn(credentials: Credentials): Promise<boolean>;
}

export const Login: FC<LoginProps> = (props): JSX.Element => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: null,
    password: null
  })
  const [isLoading, setIsLoading ] = useState<boolean>(false)


  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    const { username, password } = credentials
    if (!username || !password ) return
    setIsLoading(true)
    props.isLoggedIn(credentials)
          .then(isLoggedIn => {
            console.log(isLoggedIn)
            setIsLoading(false)
            if(isLoggedIn) {
              props.setView(Views.HOME)
            } else {
              console.log('error message')
            }
          })
          .catch(err => {
            setIsLoading(true)
            console.error(err)
          })
  }
  const onChange = ({ target }: React.ChangeEvent): void => {
    const { name, value } = target as HTMLInputElement
    setCredentials({
      ...credentials,
      [name]: value
    })
    console.log(credentials)
  }
  return (
    <div className="login-container">
      <div className="login">
        <h3>
          LOGIN
      </h3>
        <hr />
        <form
          onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="username">Username/Email:</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              required
            />
          </div>
          <hr />
          <div>
          <div className="button-container">
              <button>
                Login
              </button>
          </div>
          </div>
        </form>
        <footer>
          Your login credentials are only used to communicate with the VRChat API.
        </footer>
      </div>
    </div>
  )
}
