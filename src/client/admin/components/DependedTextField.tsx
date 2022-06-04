import { DateInput, TextInput, useInput } from 'react-admin';
import React from 'react';

export const DependedTextField = (props) => {
  const { onChange, onBlur, refValue, type = 'text', ...rest } = props;
  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
  } = useInput({
    // Pass the event handlers to the hook but not the component as the field property already has them.
    // useInput will call the provided onChange and onBlur in addition to the default needed by react-hook-form.
    onChange,
    onBlur,
    ...props,
  });

  return (
    <>
      {refValue && (
        <>
          {type === 'text' && (
            <TextInput
              type={type}
              {...field}
              label={props.label}
              error={(isTouched || isSubmitted) && invalid}
              helperText={(isTouched || isSubmitted) && invalid ? error : ''}
              required={isRequired}
              {...rest}
            />
          )}
          {type === 'date' && (
            <DateInput
              type={type}
              {...field}
              label={props.label}
              error={(isTouched || isSubmitted) && invalid}
              helperText={(isTouched || isSubmitted) && invalid ? error : ''}
              required={isRequired}
              {...rest}
            />
          )}
        </>
      )}
    </>
  );
};
