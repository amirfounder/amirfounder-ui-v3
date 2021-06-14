import React from 'react';
import styles from '../Input.module.scss'

const TextAreaInput = ({
  value,
  placeholder,
  onChange,
  id,
  rows="1",
  onBlur,
  onFocus
}) => {
  return(
    <label
      htmlFor={id}
    >
      <textarea
        className={styles.textAreaInput}
        placeholder={placeholder}
        onChange={onChange}
        id={id}
        rows={rows}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
    </label>
  )
}

export default TextAreaInput