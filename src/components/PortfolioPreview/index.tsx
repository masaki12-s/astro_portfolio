import { h } from 'preact';
import Styles from './styles.module.scss';

interface PortfolioPreviewProps {
	project: {
		frontmatter: {
			title: string;
			img: string;
			description: string;
			tags: string[];
		};
		url: string;
	};
}

const PortfolioPreview = ({ project }: PortfolioPreviewProps) => {
	const { frontmatter } = project;
	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard} style={`background-image:url(${frontmatter.img})`}>
				<h1 className={Styles.title}>{frontmatter.title}</h1>
			</div>
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
				<div className={Styles.tags}>
					Tagged:
					{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
