/* 

Add minimum selection
Add maximum selection

*/

import React from 'react'

const Checkbox = (title = '', array = []) => {
  
  // Instructions if no value
  if (typeof title !== 'string' || title.length === 0 || array.length === 0 || !Array.isArray(array)) {
    console.log(
      `%cError: %cMissing Parameters%c

    %cQuick Refernce: %c(%ctitle%c, %carray%c)%c

    %cWhat are the parameters?%c
        %cThese are the following parameters: %ctitle%c,%c %carray%c
        %ctitle%c: requires string data.%c
        %carray%c: requires array data.%c

    %cWhat are the current data values?%c
        %ctitle%c: %c${title}%c
        %carray%c: %c${array}%c

    %cWhat are the default values?%c
        %ctitle%c: %c${title}%c
        %carray%c: %c${array}%c`,

      // Title
      'color: red; font-size: 16px;',
      'color: black; font-size: 16px;', '',

      // Reference
      'color: black; font-size: 12px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',

      // What are the parameters?
      'color: black; font-size: 12px;', '',

      'color: black; font-size: 10px;',
      'color: blue; font-size: 10px;',
      'color: black; font-size: 10px;', '',
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

  // Capitalize 1st letter
  let cap1stLetter = (word) => {
    let stringSplit = word.split('')
    stringSplit[0] = stringSplit[0].toUpperCase()
    let stringJoin = stringSplit.join('')
    return stringJoin
  }

  // All lower cased letters
  let lowCase = word => word.toLowerCase()

  // Checkboxes for fieldset
  const checkboxes = array.map((checkbox) => {
    // Returns Checkbox
    return (
      <div key={lowCase(checkbox)}>
        <input name={lowCase(checkbox)} id={lowCase(checkbox)} type="checkbox" />
        <label htmlFor={lowCase(checkbox)}>{cap1stLetter(checkbox)}</label>
      </div>
    )
  })

  // Insert checkboxes into fieldset tag
  const html = (title, checkboxes) => {
    return (
      <fieldset>
        <legend>{cap1stLetter(title)}</legend>
        {checkboxes}
      </fieldset>
    )
  }
  return html(title, checkboxes)
}

export default Checkbox