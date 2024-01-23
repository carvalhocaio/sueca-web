import React from 'react';
import Image from 'next/image';

const Card = ({imageSource, rule, description, onPress}) => {
	return (
		<div className="cardContainer" onClick={onPress} style={styles.cardContainer}>
			<div style={styles.cardContent}>
				<div style={styles.imageContainer}>
					<Image src={`/${imageSource}`} alt="Card" width={350} height={500} />
				</div>
				<p style={styles.cardRule}>{rule}</p>
				<p style={styles.cardDescription}>{description}</p>
			</div>
		</div>
	);
}

const styles = {
	cardContainer: {
		alignItems: 'center',
	},
	cardContent: {
		alignItems: 'center',
		padding: 20,
		borderRadius: 20,
		backgroundColor: "#FFF",
		boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
	},
	imageContainer: {
		margin: 'auto',
		width: '350px',
		height: '500px',
	},
	cardRule: {
		marginTop: 10,
		fontSize: 24,
		textAlign: 'center',
	},
	cardDescription: {
		marginTop: 10,
		fontSize: 16,
		color: '#555555',
		textAlign: 'center',
	},
};



export default Card;