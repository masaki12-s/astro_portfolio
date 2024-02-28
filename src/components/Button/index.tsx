import { h, FunctionalComponent } from 'preact';
import Styles from './styles.module.scss';

interface ButtonProps {
	children: string;
}

const Button: FunctionalComponent<ButtonProps> = ({ children }) => {
	return <span className={Styles.button}>{children}</span>;
}
export default Button;
