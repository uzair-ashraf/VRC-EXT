import React, { FC } from "react";
import { Spinner } from "../components";



export const Loading: FC = (): JSX.Element => {

  return (
    <div className="loading">
      <div>
        <div>
          <Spinner
          />
        </div>
        <div>
          Loading...
      </div>
      </div>
    </div>
  )
}
