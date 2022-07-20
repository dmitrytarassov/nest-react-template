import React from 'react';
import BreadCrumbs from '@frontend/components/BreadCrumbs';
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
import PageHeader from '@frontend/components/PageHeader';
import Image from '@frontend/components/Image';
import styles from './ListTop.module.scss';

interface ListTopProps {
  breadcrumbs: IBreadCrumb[];
  backLink: string;
  title: string;
  image?: string;
  search?: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
}

const ListTop = ({
  breadcrumbs,
  backLink,
  title,
  search,
  image,
}: ListTopProps) => {
  return (
    <>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <PageHeader backLink={backLink} title={title} image={image}>
        {search && (
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              value={search.value}
              onChange={(e) => search.onChange(e.target.value)}
              placeholder={search.placeholder || 'Поиск'}
            />
            <div className={styles.search}>
              <Image src="/public/search.svg" width="24px" height="24px" />
            </div>
          </div>
        )}
      </PageHeader>
    </>
  );
};

export default ListTop;
