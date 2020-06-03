let restaurant={
    name: 'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailablity:function (partySize) {
        let seatsLeft=this.guestCapacity-this.guestCount
        return seatsLeft>=partySize
    },
    seatParty:function (amount) {
        this.guestCount=this.guestCount+amount
    },
    removeParty:function (amount) {
        this.guestCount=this.guestCount-amount
    }

}

restaurant.seatParty(72)
console.log(restaurant.checkAvailablity(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailablity(4))
