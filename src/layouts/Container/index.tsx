import { ReactNode } from 'react';
import styles from './style.module.css';

interface IContainerProps {
    children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export { Container };