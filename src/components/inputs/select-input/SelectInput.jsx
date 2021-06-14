import React from 'react';
import styles from '../Input.module.scss'

const SelectInput = ({
  options,
  value,
  onChange,
  id
}) => {
  return(
    <label
      htmlFor={id}
    >
      <select
        id={id}
        className={styles.selectInput}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option value={option} key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default SelectInput
