import React from 'react';
import styles from '../Input.module.scss'

const SelectInput = ({
  options,
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
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

export default SelectInput
