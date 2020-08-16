const data={
    locations:[],
    get location(){
        return this._location
    },
    set location(value){
        this._location=value.trim()
        this.locations.push(this._location)
    }
}

data.location='Chicago'
data.location='NJ'
console.log(data.location)
