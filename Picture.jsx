/*

 <picture>
  <source media="(min-width: 650px)" srcSet="img_pink_flowers.jpg">
  <source media="(min-width: 465px)" srcSet="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture> 

*/

import React from 'react'
import { isArray, isObject, isFalsey, isString, isError } from './isDatatype.js'

const Picture = ({ sources, img, css, help = false }) => {

  let error = false

  if (!isArray(sources) || isFalsey(sources)) {
    console.log(`%csources%c = ${JSON.stringify(sources, null, 4)}`, 'color: green')
    error = true
  }
  if (!isObject(img) || isFalsey(img)) {
    console.log(`%cimg%c = ${JSON.stringify(img, null, 4)}`, 'color: blue')
    error = true
  }
  if (!isString(css) || isFalsey(css)) {
    console.log(`%ccss%c = ${css === '' ? '""' : JSON.stringify(css, null, 4)}`, 'color: goldenrod')
    error = true
  }
  if (error && help === false) {
    console.log(`For more information pass the key "help" as a value of "true" ({ help: true }) as an argument`)
  }

  if (help) {
    console.log(
      `%c Guide %c\n` +
      `%cParameters%c\n` +
      `{ %csources%c, %cimg%c, %ccss%c, help = false }\n` +
      `\n` +

      `%cCreate Source Tags%c\n` +
      `%csources%c = %csources%c.map(\n` +
      `  %csource%c => <source \n` +
      `    key={%csource.name%c || ''} \n` +
      `    id={%csource.name%c} \n` +
      `    className={%csource.name%c} \n` +
      `    media={%csource.media%c || ''} \n` +
      `    srcSet={%csource.srcSet%c || ''} \n` +
      `  />\n`+
      `)\n` +
      `\n` +
      
      `%cCreate Picture Tag%c\n` +
      `<picture className={%ccss%c}>\n` +
      `  {%csources%c}\n` +
      `  <img src={%cimg.src%c || ''} alt={%cimg.alt%c || ''} />\n` +
      `</picture>\n\n`+
      
      `Notes: Please ensure that images used for this tag are imported.`,
      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // sources = green, source = red,  img = blue, css = goldenrod
      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: blue', '', 'color: goldenrod', '',

      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: green', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '',
      
      'font-weight: 1000; text-decoration: underline;', '',
      'color: goldenrod', '', 'color: green', '', 'color: blue', '', 'color: blue', '',
    )

    if (!isArray(sources)) {
      console.log(
        `%c Output %c\n` +
        `Unable to output results. Function requires "%csources%c" array.`,
        `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
        'color: green', '',
      )
      return <h1>A "sources" array is required</h1>
    }

    console.log(
      `%c Output %c\n` +
      `%cParameters%c\n` +
      `{ %csources%c, %cimg%c, %ccss%c, help = true }\n` +
      `\n` +

      `%cCreate Source Tags%c\n` +
      `%csources%c = %csources%c.map(\n` +
      `  %csource%c => <source \n` +
      `    key={%csource.name%c || ''} \n` +
      `    id={%csource.name%c} \n` +
      `    className={%csource.name%c} \n` +
      `    media={%csource.media%c || ''} \n` +
      `    srcSet={%csource.srcSet%c || ''} \n` +
      `  />\n` +
      `)\n` +
      `\n` +

      `%cCreate Picture Tag%c\n` +
      `<picture className={%ccss%c}>\n` +
      `  %c${sources.map(
        source => {
          let tag = 
            '<source ' + 
              'key="' +  source.name  + '" ' +
              'id="' + source.name + '" ' +
              'className= "' + source.name + '" ' +
              'media="' + source.media + '" ' +
              // Substring's purposed to shorten base64 data strings for readability
              'srcSet="' + source.srcSet.substring(0, 50) + '" '+ 
            '/>\n'; 
          if (sources[sources.length - 1] !== source) { tag += '  ' }
          return tag }
      ).join('')}%c` +
      `  <img src="%c${img.src.substring(0, 50) || ''}%c" alt="%c${img.alt || ''}%c" />\n` +
      `</picture>\n\n`,

      `color: white; font-size: 50px; background: black; margin: 50px 0; border-radius: 5px; line-height: 2;`, '',
      // sources = green, source = red,  img = blue, css = goldenrod
      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: blue', '', 'color: goldenrod', '',

      'font-weight: 1000; text-decoration: underline;', '',
      'color: green', '', 'color: green', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '', 'color: red', '',

      'font-weight: 1000; text-decoration: underline;', '',
      'color: goldenrod', '', 'color: green', '', 'color: blue', '', 'color: blue', '',
    )
  }

  sources = sources.map(
    source => <source 
      key={source.name || ''} 
      id={source.name} 
      className={source.name} 
      media={source.media || ''} 
      srcSet={source.srcSet || ''}
    />
  )

  return (
    <picture className={css}>
      {sources}
      <img src={img.src || ''} alt={img.alt || ''} />
    </picture>
  )
}

export default Picture