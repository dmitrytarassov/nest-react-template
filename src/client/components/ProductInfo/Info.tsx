import React, { useState } from 'react';
import Tabs from './Tabs';
import styles from './Info.module.scss';
import classNames from 'classnames';

interface InfoProps {
  description?: string;
  properties?: string;
  propertiesText?: string;
  promotion?: string;
}

const Info = ({
  properties = '',
  propertiesText,
  description,
  promotion,
}: InfoProps) => {
  const [show, setShow] = useState<string>(
    properties || propertiesText ? 'properties' : 'description',
  );

  const _properties = properties
    .split('\n')
    .map((e) => {
      if (e.startsWith('**')) {
        return ['**', e.replace('**', '')];
      } else {
        const [param = '', value = ''] = e.split('===');
        return [param, value];
      }
    })
    .filter(([a, b]) => a && b);

  const showButtons =
    (propertiesText || properties) && (description || promotion);

  return (
    <div className={styles.info}>
      {showButtons && (
        <div className={styles.buttons}>
          <Tabs
            options={[
              { name: 'Характеристики', value: 'properties' },
              { name: 'Описание', value: 'description' },
            ]}
            active={show}
            onChange={setShow}
          />
        </div>
      )}

      {show === 'properties' && (
        <>
          <div className={styles.title}>Характеристики</div>
          {_properties.map(([name, value]) => (
            <div className={styles.props} key={`${name}_${value}`}>
              {name === '**' ? (
                <div className={styles.propTitle}>{value}</div>
              ) : (
                <>
                  <div className={classNames(styles.base, styles.name)}>
                    {name}
                  </div>
                  <div className={styles.separator} />
                  <div className={classNames(styles.base, styles.value)}>
                    {value.split('==').map((e, i) => (
                      <p className={styles.line} key={`${name}_${e}_${i}`}>
                        {e}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          {propertiesText && (
            <div className={styles.propText}>{propertiesText}</div>
          )}
        </>
      )}

      {show === 'description' && (
        <>
          <div className={styles.title}>
            {promotion && !description
              ? 'Описание акци'
              : 'Описание устройства'}
          </div>

          {promotion && <div className={styles.description}>{promotion}</div>}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
        </>
      )}
    </div>
  );
};

export default Info;
