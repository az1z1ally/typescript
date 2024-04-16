"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enums exists, forexample when you want to restrict somebody's choice( have restrictive options) based on the values that is offered
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 23] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 24] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// If yuu are not using numbers(broke the pattern that is being used) you will have to provide the value(initiializer) for each item.
var SeatChoice_;
(function (SeatChoice_) {
    SeatChoice_["AISLE"] = "aisle";
    SeatChoice_[SeatChoice_["MIDDLE"] = 23] = "MIDDLE";
    SeatChoice_[SeatChoice_["FOURTH"] = 24] = "FOURTH";
    SeatChoice_["WINDOW"] = "window";
})(SeatChoice_ || (SeatChoice_ = {}));
var hcSeat = SeatChoice.AISLE;
