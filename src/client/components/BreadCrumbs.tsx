import React, { Fragment } from 'react';
import Link from 'next/link';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import styles from './BreadCrumbs.module.scss';
import classNames from 'classnames';

interface BreadCrumbsProps {
  breadcrumbs: IBreadCrumb[];
  revertColors?: boolean;
}

const BreadCrumbs = ({ breadcrumbs, revertColors }: BreadCrumbsProps) => {
  return (
    <div
      className={classNames(styles.container, {
        reverted: revertColors,
      })}
    >
      {breadcrumbs.map((breadcrumb, index) =>
        index !== breadcrumbs.length - 1 ? (
          <Fragment key={breadcrumb.name}>
            <Link href={breadcrumb.link} passHref>
              <a className={styles.element}>{breadcrumb.name}</a>
            </Link>
            <span className={styles.slash}>{' / '}</span>
          </Fragment>
        ) : (
          <span key={breadcrumb.name} className={styles.current}>
            {breadcrumb.name}
          </span>
        ),
      )}
    </div>
  );
};

export default BreadCrumbs;
