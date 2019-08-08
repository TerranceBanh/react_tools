import React from 'react'
import { isArray, isString, isFalsey } from './isDatatype.js'

const List = ({ name = '', items, listCSS = '', help = false}) => {

  let error = false

  if (!isString(name) || !isFalsey(name)) {
    console.log(`%cname%c = ${JSON.stringify(name)}`, 'color: blue')
    error = true
  }
  if (!isString(listCSS) || isFalsey(listCSS)) {
    console.log(`%clistCSS%c = ${JSON.stringify(listCSS)}`, 'color: goldenrod')
    error = true
  }
  if (!isArray(items) || isFalsey(items)) {
    console.log(`%citems%c = ${items}`, 'color: green')
    error = true
  }
  if (error && help === false) {
    console.log(`For more information pass the key "help" as a value of "true" ({ help: true }) as an argument`)
  }

  if (help) {
    console.log(
      `%c Guide %c\n`+
      `%cParameters%c\n`+
      `{ %cname%c = '', %citems%c, %clistCSS%c = '', help = false }\n\n`+
      `%cCreate li tags%c\n`+
      `%citems%c = %citems%c.map(\n  %citem%c => <li key={%cname%c + %citem%c} id={%cname%c + %citem%c} className={%citem%c}>{%citem%c}</li>\n)\n\n`+
      `%cCreate list%c\n`+
      `<ol id={%cname%c} className={%clistCSS%c}>\n  {%citems%c}\n</ol>`,

      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // name = blue, items = green, item = red, listCSS = goldenrod 
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue','', 'color: green','', 'color: goldenrod','',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: green', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: blue', '',  'color: red', '', 'color: red', '', 'color: red', '',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue', '', 'color: goldenrod', '', 'color: green', '',
    )

    if (!isArray(items)) {
      console.log(
        `%c Output %c\n` +
        `Unable to output results. Function requires "items" array.`,
        `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`,
        'color: green', '',
      );
      return <h1>An "items" array is required</h1>
    }

    console.log(
      `%c Output %c\n`+
      `%cArguments%c\n` +
      `{ %c${name}%c, %c[${items}]%c, %c${listCSS}%c, ${help} }\n\n` +
      `%cCreate li tags%c\n` +
      `%c[${items}]%c = %c[${items}]%c.map(\n  %citem%c => <li key={%c${name}%c + %citem%c} id={%c${name}%c + %citem%c} className={%citem%c}>{%citem%c}</li>\n)\n\n` +
      `%cCreate list%c\n` +
      `<ol id={%c${name}%c} className={%c${listCSS}%c}>\n  %c${items.map(
        item => {let tag = '<li key="'+ name + item +'" id="'+ name + item +'" className="' + item +'">'+ item +'</li>\n'; if (items[items.length - 1] !== item) {tag += '  '} return tag}
      ).join('')}%c</ol>`,


      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // name = blue, items = green, item = red, listCSS = goldenrod 
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue', '', 'color: green', '', 'color: goldenrod', '',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: green', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: blue', '', 'color: red', '', 'color: red', '', 'color: red', '',
      'font-weight: 1000; text-decoration: underline;', '',
      'color: blue', '', 'color: goldenrod', '', 'color: green', '',
    )
    
  }

  if (!isArray(items)) { return <h1>An "items" array is required</h1> }

  items = items.map(
    item => <li key={name + item} id={name + item} className={item}>{item}</li>
  )

  return (
    <ol id={name} className={listCSS}>
      {items}
    </ol>
  )

}

export default List

// Avoid inline styles and scripts for security.