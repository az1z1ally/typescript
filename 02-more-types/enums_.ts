// Enums exists, forexample when you want to restrict somebody's choice( have restrictive options) based on the values that is offered
enum SeatChoice {
    AISLE = 10, // changing the default starting value (0)
    MIDDLE = 23,
    WINDOW
}

// If yuu are not using numbers(broke the pattern that is being used) you will have to provide the value(initiializer) for each item.
enum SeatChoice_ {
    AISLE = "aisle", // changing the default starting value (0)
    MIDDLE = 23,
    FOURTH,
    WINDOW = "window"
}

const hcSeat = SeatChoice.AISLE

export {}