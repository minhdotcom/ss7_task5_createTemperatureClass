function Temperature (degreeC) {
    this.degreeC = degreeC;
    this.degreeF = function () {
        return this.degreeC * 1.8 + 32;
    }
    this.degreeK = function () {
        return this.degreeC + 273.15;
    }
}