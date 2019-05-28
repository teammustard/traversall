export const numberWithCommas = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getDiscountedPrice = (tour) => {
	const highestDiscount = Math.max(...tour.trips.map((trip) => trip.discount));
	return Math.round(tour.listed_price * ((100 - highestDiscount) / 100));
};

export const getMonthlyPayment = (tour) => {
	const monthlyRate = 0.0704;
	return Math.round(tour.listed_price / 12 * (1 + monthlyRate));
};
