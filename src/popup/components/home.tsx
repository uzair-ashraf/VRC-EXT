import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { Styles } from '../types'

interface HomeProps {
  setView: Function
}

export const Home: FC<HomeProps> = (props): JSX.Element => {
  const styles: Styles = {
    heading: {
      fontSize: '4rem',
      margin: '1rem',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      textTransform: 'uppercase',
      color: '#FFFFFF',
      WebkitTextStroke: '1px ​black',
      lineHeight: '1.2',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    noCatsAvailableMessage: {
      fontSize: '1.9rem',
      position: 'absolute',
      width: '281px',
      height: '32px',
      left: '116px',
      top: '299px',
      color: '#FFFFFF',
      WebkitTextStroke: '1px black',
      lineHeight: '1.2',
    }
  }

  return (
    <div>
      <h1
        style={styles.heading}
      >
      </h1>
      <div
      style={styles.container}
      >
        Hello world!
      </div>
    </div>
  )
}
