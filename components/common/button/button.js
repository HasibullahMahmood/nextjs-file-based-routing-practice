import Link from 'next/link';
import styles from './button.module.css';

const LinkButton = (props) => {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a className={styles.btn}>{props.children}</a>
			</Link>
		);
	}

	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default LinkButton;
