'use strict';

// import dayjs and sqlite3
const dayjs = require('dayjs');
const sqlite = require('sqlite3');

// the Exam object
function Exam(code, name, credits, date, score, laude = false) {
    this.code = code;
    this.name = name;
    this.credits = credits;
    this.score = score;
    this.laude = laude;
    this.date = dayjs(date);

    this.toString = () => {
        return `
    Code: ${this.code}, Course: ${this.name}, CFU: ${this.credits}, Grade: ${this.laude ? this.score + 'L' : this.score}, Date: ${this.date.format('YYYY-MM-DD')}`;
    };

};