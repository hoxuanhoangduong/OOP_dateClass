let MyDate = function (day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function () {
        if (this.day < 10){
            this.day = '0' + this.day;
        }
        return this.day;
    };
    this.getMonth = function () {
        if (this.month < 10){
            this.month = '0' + this.month;
        }
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };

    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };

    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    this.toString = function (day, month, year) {
        return
    }
};


let date = new MyDate(0, 0, 0);


function calendar() {
    date.setDay(document.getElementById('day').value);
    date.setMonth(document.getElementById('month').value);
    date.setYear(document.getElementById('year').value);

    document.getElementById('result').innerHTML = date.getDay() + '/' + date.getMonth() + '/' + date.getYear();
}

