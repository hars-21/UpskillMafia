import Card from "./card";

const Container = () => {
	let cardData = [];
	for (let i = 1; i < 16; i++) {
		cardData.push({
			id: i,
			title: `Card ${i}`,
			desc: `This is card ${i} description`,
			img: `https://picsum.photos/200/300?random=${i}`,
		});
	}
	return (
		<div className="container">
			{cardData.map((card) => {
				return (
					<Card
						key={card.id}
						title={card.title}
						desc={card.desc}
						img={card.img}
					/>
				);
			})}
		</div>
	);
};

export default Container;
