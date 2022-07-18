import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { WithTheme } from '@frontend/utils/theme';
import classNames from 'classnames';
import Button from '@frontend/components/Button';
import { get, post } from '@frontend/utils/fetcher';
import Link from 'next/link';
import styles from './Form.module.scss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 604px;
  align-items: flex-start;
  width: 100%;
  position: relative;

  &.sended {
    max-width: 335px;
  }

  .text {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    margin-bottom: 32px;
    color: #6c768a;
  }

  input,
  textarea {
    background: #ffffff;
    border: 1px solid #d8dde2;
    border-radius: 8px;
    padding: 0 16px;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #6c768a;
    height: 56px;
    width: 448px;
    box-sizing: border-box;

    &.valid {
      border-color: #13ec50;
    }

    &.invalid {
      border-color: #e22446;
    }

    ${({ theme }: WithTheme) =>
      theme.mixins.tablet(css`
        width: 100%;
      `)}

    ::placeholder {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      color: #6c768a;
    }
  }

  textarea {
    height: 167px;
    margin-top: 24px;
    padding: 16px;
  }

  .checkbox {
    display: flex;
    margin-top: 24px;
    align-items: center;
    cursor: pointer;
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.05em;

    a {
      color: #7749d9;
    }

    span {
      width: calc(100% - 32px);
      position: relative;

      &.withBox {
        :before {
          content: '';
          position: absolute;
          left: -39px;
          width: 39px;
          height: 22px;
          top: -2px;
        }
      }
    }

    :before {
      content: '';
      width: 24px;
      height: 24px;
      border: 2px solid #9ea6b6;
      border-radius: 8px;
      margin-right: 16px;
      box-sizing: border-box;
    }

    &.checked:before {
      background: url(/public/checked.svg);
      border: none;
    }
  }

  .result {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: none;

    &.active {
      display: block;
    }

    &.active ~ * {
      opacity: 0;
    }
  }
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
  background-color: #f1f5f6;
  color: ${({ theme }: WithTheme) =>
    theme.colors.buttons.insurance.default.color};

  &[data-button-link]:hover {
    background-color: #7749d9 !important;
    color: ${({ theme }: WithTheme) =>
      theme.colors.buttons.insurance.hover.color}!important;
  }

  &[data-button-link]:disabled,
  &[data-button-link]:disabled:hover {
    cursor: default;
    background-color: #f1f5f6 !important;
    color: #aeaeae !important;
  }
`;

const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

const Form = ({
  onSend,
  canSend,
}: {
  onSend: () => void;
  canSend: boolean;
}) => {
  const [checked, setChecked] = useState<boolean>();
  const [text, settext] = useState<string>();
  const [email, setemail] = useState<string>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [sended, setsended] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(
      !!(!sended && checked && validateEmail(email || '') && text?.length > 0),
    );
  }, [email, text, checked, sended]);

  const send = async () => {
    if (isValid) {
      await post('/api/feedback/insurance', {
        email,
        message: text,
      });
      setemail('');
      settext('');
      setChecked(false);
      localStorage.setItem('sended', '1');
      setsended(true);
      onSend();
    }
  };

  useEffect(() => {
    if (!canSend) {
      setsended(true);
      onSend();
    }
  }, []);

  return (
    <Container className={classNames({ sended })}>
      <div className={classNames('result', { active: sended })}>
        <div className="text">
          Мы благодарим вас, за вашу заявку. Наши специалисты свяжутся с вами в
          ближайшее время
        </div>
      </div>
      <div className="text">
        Для более подробного ознакомления с условиями страхования заполните
        форму, мы с вами свяжемся и ответим на вопросы
      </div>
      <input
        type="text"
        placeholder="Ваш E-mail"
        onChange={(e) => setemail(e.target.value)}
        className={classNames({
          valid: validateEmail(email || ''),
          invalid: (email || '').length > 0 && !validateEmail(email || ''),
        })}
      />
      <textarea
        placeholder="Напишите сопроводительный текст"
        onChange={(e) => settext(e.target.value)}
      ></textarea>
      <div className={classNames('checkbox', { checked })}>
        <span>
          <span className="withBox" onClick={() => setChecked(!checked)}>
            Я соглашаюсь на обработку{' '}
          </span>
          <Link href="/terms">персональных данных</Link>
        </span>
      </div>
      <Button
        className={styles.button}
        variant="grayViolet"
        disabled={!isValid}
        onClick={send}
        size="large"
      >
        Отправить заявку
      </Button>
    </Container>
  );
};

export default Form;
