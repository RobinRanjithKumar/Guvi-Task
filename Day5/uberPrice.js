class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;         // Base fare for the ride
        this.costPerMinute = costPerMinute; // Cost per minute of the ride
        this.costPerMile = costPerMile;     // Cost per mile of the ride
    }

    calculatePrice(distance, time) {
        // distance: The distance of the ride in miles
        // time: The time of the ride in minutes
        const distanceCost = this.costPerMile * distance;
        const timeCost = this.costPerMinute * time;
        const totalPrice = this.baseFare + distanceCost + timeCost;

        return totalPrice;
    }
}

// Example usage:
const uberCalculator = new UberPriceCalculator(5.50, 1.35, 10.75); // Base fare: $5.50, Cost per minute: $1.35, Cost per mile: $10.75

const distance = 10; // 10 miles
const time = 20;     // 20 minutes

const price = uberCalculator.calculatePrice(distance, time);
console.log(`The Uber price for your ride is $${price.toFixed(2)}`); // Output: The Uber price for your ride is $140.00
