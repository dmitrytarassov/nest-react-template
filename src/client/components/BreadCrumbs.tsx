import React, { Fragment } from 'react';
import Link from 'next/link';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
  breadcrumbs: IBreadCrumb[];
}

const BreadCrumbs = ({ breadcrumbs }: BreadCrumbsProps) => {
  return (
    <div className={styles.container}>
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
