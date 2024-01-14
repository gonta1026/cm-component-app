import styles from './styles.module.scss';

export const CmSpinner = () => {
  return (
    <div className={styles['.lds-dual-ring-wrap']}>
      <div className={styles['lds-dual-ring']} />
    </div>
  );
};
