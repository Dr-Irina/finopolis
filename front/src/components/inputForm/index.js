import React, { memo } from 'react';
import { Button, Modal, Input } from 'antd';
import styles from './styles.module.scss';

const IconClose = ({ onClose }) => {
  return (
    <svg
      width='29'
      height='29'
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styles.close}
      onClick={onClose}
    >
      <line
        y1='-2'
        x2='35.5602'
        y2='-2'
        transform='matrix(0.718505 0.695521 -0.718505 0.695521 0 3.6499)'
        stroke='#fff'
        stroke-width='4'
      />
      <line
        y1='-2'
        x2='35.5602'
        y2='-2'
        transform='matrix(-0.718505 0.695521 -0.718505 -0.695521 25.5503 1)'
        stroke='#fff'
        stroke-width='4'
      />
    </svg>
  );
};

export const InputForm = memo(
  ({ title, inputTitle1, inputTitle2, buttonTitle, onSubmit, onClose, isOpen }) => {
    return (
      <Modal className={styles.modal} open={isOpen}>
        {/*{console.log('ooooooooopen')}*/}
        <div className={styles.container}>
          {onClose && <IconClose onClose={onClose} />}
          <div className={styles.content}>
            <p className={styles.title}>{title}</p>
            <div className={styles.input1}>
              <p>{inputTitle1}</p>
              <Input className={styles.input} />
            </div>
            <div className={styles.input2}>
              <p>{inputTitle2}</p>
              <Input className={styles.input} />
            </div>
            <Button className={styles.btn} onClick={onSubmit}>
              {buttonTitle}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
);
