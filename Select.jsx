/*
Select({

        name: 'Computers',
        options: [
          {desktop: [400, 800, 1200]},
          {laptop: [600, 1000, 1400]},
          {phone: [200, 500, 1000]}
        ]
      })

*/

import React, { Component } from "react";

const Select = ({ name, options }) => {
  
  options = options.map(
    optgroup => {
      let tags = [] // Store extracted option tags

      // Access object's keys and values
      for (const key in optgroup) {
        optgroup[key] = optgroup[key].map(
          // Creates and extracts option tags
          option => tags.push(
            <option className={JSON.stringify(option).toLowerCase()} key={option} value={option}>{option}</option>
          ) 
        )
      }
      return ( 
        <optgroup className={Object.keys(optgroup)[0].toLowerCase()} key={Object.keys(optgroup)[0]} label={Object.keys(optgroup)[0]}>
          {tags}
        </optgroup>
      )
    }
  )

  return (
    <select className={name || ''} name={name || ''} id={name || ''} defaultValue={name}>
      <option value={name} disabled>{name}</option>
      {options}
    </select>
  )
}

export default Select;
