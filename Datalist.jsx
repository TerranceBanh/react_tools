// Add class for styling

import React from 'react'
import { isString, isArray } from './isDatatype.js'

const Datalist = (name = '', options = []) => {
  
  // Instructions if no value
  if (!isString(name) || isFalsey(name) || isFalsey(options) || !isArray(options)) {
    console.log(
      `%cError: %cMissing Parameters%c

    %cQuick Refernce: %c(%cname%c, %coptions%c)%c

    %cWhat are the parameters?%c
        %cThese are the following parameters: %cname%c,%c %coptions%c
        %cname%c: requires string data.%c
        %coptions%c: requires options data.%c

    %cWhat are the current data values?%c
        %cname%c: %c${name}%c
        %coptions%c: %c${options}%c

    %cWhat are the default values?%c
        %cname%c: %c${name}%c
        %coptions%c: %c${options}%c`,
      
      // Title
      'color: red; font-size: 16px;',
      'color: black; font-size: 16px;', '',
      
      // Reference
      'color: black; font-size: 12px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;','',
      
      // What are the parameters?
      'color: black; font-size: 12px;', '',

      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;','',
      'color: blue; font-size: 10px;', '',

      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      // What are the current data values?
      'color: black; font-size: 12px;', '',
      
      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',
      
      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',

      // What are the default values?
      'color: black; font-size: 12px;', '',

      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',

      'color: blue; font-size: 10px;', '',
      'color: purple; font-size: 10px;', '',
    )
    return (<h1>Missing Component</h1>)
  }

  // Options for datalist
  options = options.map(
    option => <option key={option} value={option}>{option}</option>
  )

  // Insert option tags into datalist tag
    return (
      <React.Fragment>
        <input type="text" list={name} name={name} />
        <datalist id={name}>
          {options}
        </datalist>
      </React.Fragment>
    )
}

export default Datalist