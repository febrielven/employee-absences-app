import {ReactNode, useEffect} from 'react';
import {createPortal} from 'react-dom';

const modalRoot = document.getElementById('modal-root');

type Props = {
  children: ReactNode;
};

export default function Portal(props: Props) {
  let element = document.createElement('div');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modalRoot?.appendChild(element);
    return () => {
      document.body.style.overflow = 'unset';
      modalRoot?.removeChild(element);
    };
  }, [element]);

  return createPortal(props.children, element);
}
