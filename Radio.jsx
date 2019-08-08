import React from 'react'
import { isString, isFalsey, isArray } from './isDatatype.js'

const Radio = ({title = '', radios = [], css = '', help = false}) => {

  let error = false

  if (!isString(title) || isFalsey(title)) {
    console.log(`%ctitle%c = ${JSON.stringify(title)}`, 'color: blue')
    error = true
  }
  if (!isString(css) || isFalsey(css)) {
    console.log(`%ccss%c = ${JSON.stringify(css)}`, 'color: goldenrod')
    error = true
  }
  if (!isArray(radios) || isFalsey(radios)) {
    console.log(`%cradios%c = ${JSON.stringify(radios, null, 4)}`, 'color: green')
    error = true
  }
  if (error && help === false) {
    console.log(`For more information pass the key "help" as a value of "true" ({ help: true }) as an argument`)
  }

  if (help) {
    console.log(
      `%c Guide %c\n`+
      `%cParameters%c\n`+
      `{ %ctitle%c = '', %cradios%c = [], %ccss%c = '', help = false }\n\n` +
      `%cCreate radio buttons%c\n` +
      `%cradios%c = %cradios%c.map(%cradio%c => {\n   return (\n     <div key={radioLow} className='radio'>\n       <input name={radioLow} id={radioLow} type="radio" className='input' />\n       <label htmlFor={radioLow} className='label'>{cap1stLetter(radio)}</label>\n     </div>\n   )\n })\n\n` +
      `%cCreate radio input field%c\n` +
      `<fieldset id={title.toLowerCase()} className={css}>\n  <legend className="title">{cap1stLetter(title)}</legend>\n  {radios}\n</fieldset>`,

      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // title = blue, radios = green, radio = red, css = goldenrod
      // 'font-weight: 1000; text-decoration: underline;', '',
      // 'color: blue', '', 'color: green', '', 'color: goldenrod', '',
      // 'font-weight: 1000; text-decoration: underline;', '',
      // 'color: green', '', 'color: green', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: red', '', 'color: red', '',
      // 'font-weight: 1000; text-decoration: underline;', '',
      // 'color: blue', '', 'color: goldenrod', '', 'color: green', '',
    )

    if (!isArray(radios)) { return <h1>A "radios" array is required</h1> }

    console.log(
      `%c Output %c\n` +
      `%cArguments%c\n` +
      `{ %c${title}%c, %c[${radios}]%c, %c${css}%c }\n\n` +
      `%cCreate li tags%c\n` +
      `%c[${radios}]%c = %c[${radios}]%c.map(\n  %cradio%c => <li key={%c${title}%c + %cradio%c} id={%c${title}%c + %cradio%c} className={%cradio%c}>{%cradio%c}</li>\n)\n\n` +
      `%cCreate list%c\n` +
      `<ol id={%c${title}%c} className={%c${css}%c}>\n  %c${radios.map(
        radio => { let tag = '<li key="' + title + radio + '" id="' + title + radio + '" className="' + radio + '">' + radio + '</li>\n'; if (radios[radios.length - 1] !== radio) { tag += '  ' } return tag }
      ).join('')}%c</ol>`,


      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // title = blue, radios = green, radio = red, css = goldenrod
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue', '', 'color: green', '', 'color: goldenrod', '',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: green', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: red', '', 'color: red', '',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue', '', 'color: goldenrod', '', 'color: green', '',
    )

  }

  // Capitalize 1st letter
  let cap1stLetter = (word) => {
    let stringSplit = word.split('')
    stringSplit[0] = stringSplit[0].toUpperCase()
    return stringSplit.join('')
  }

  // Radios for fieldset
  radios = radios.map(radio => {
    // Returns Radio
    let radioLow = radio.toLowerCase()
    return (
      <div key={radioLow} className='radio'>
        <input name={radioLow} id={radioLow} type="radio" className='input' />
        <label htmlFor={radioLow} className='label'>{cap1stLetter(radio)}</label>
      </div>
    )
  })

  // Insert radios into fieldset tag
  return (
    <fieldset id={title.toLowerCase()} className={css}>
      <legend className={title.toLowerCase()}>{cap1stLetter(title)}</legend>
      {radios}
    </fieldset>
  )
}

export default Radio
