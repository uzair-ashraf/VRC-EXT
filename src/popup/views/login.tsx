import React, { FC, useState } from "react";

export const Login: FC = (): JSX.Element => {

  interface LoginInfo {
    username: string;
    password: string;
  }
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    username: null,
    password: null
  })


  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    console.log(loginInfo)
  }
  const onChange = ({ target }: React.ChangeEvent): void => {
    const { name, value } = target as HTMLInputElement
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
    console.log(loginInfo)
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
