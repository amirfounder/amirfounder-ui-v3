import React from 'react';
import styles from '../Input.module.scss';

const TextInput = ({
  onChange,
  placeholder,
  value,
  id,
  readOnly,
  onKeyDown
}) => {
  return(
    <label
      htmlFor={id}
    >
      <input
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        id={id}
        onChange={onChange}
        value={value}
        className={styles.textInput}
        type="text"
        placeholder={placeholder}
      />
    </label>
  )
}

export default TextInput