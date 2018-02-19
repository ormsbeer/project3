/**
 *   @author Ormsbee,Rhonda (ormsbeer@student.ncmich.edu)
 *   @version
 *   @summary Assignment 3 :: created: 02.12.2018
 */


"use strict";
const PROMPT = require('readline-sync');

let newRating, invalidResponse, movieTitle;
let ratings = [];
const RATING = {
    MIN: 1,
    MAX: 5,
    INVALID: 3
}

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setInvalidResponse();
    setMovieTitle();
    while (invalidResponse < RATING.INVALID) {
        setNewRating();
        checkNewRating();
    }
    setAverageRating();
}

main();

/**
 * @method
 * @desc invalidResponse mutator
 * @returns {null}
 */
function setInvalidResponse() {
    invalidResponse = 0;
}

/**
 * @method
 * @desc movieTitle mutator
 * @returns {null}
 */
function setMovieTitle() {
    console.clear();
    movieTitle = PROMPT.question("What movie would you like to review?");
}

/**
 * @method
 * @desc newRating mutator
 * @returns {null}
 */
function setNewRating() {
    console.clear();
    console.log(" current invalid ratings are " + invalidResponse + " out of " + RATING.INVALID + " in a row ");
    newRating = Number(PROMPT.question("What rating would you give " + movieTitle + "?\n"));
}

/**
 * @method
 * @desc redirect new response
 * @returns {null}
 */
function checkNewRating() {
    if (isNaN(newRating) || newRating > RATING.MAX || newRating < RATING.MIN) {
        increaseInvalidResponse();
    } else {
        addRating();
    }
}

/**
 * @method
 * @desc InvalidResponse Mutator
 * @returns {null}
 */
function increaseInvalidResponse() {
  invalidResponse++;

}

/**
 * @method
 * @desc ratings & InvalidResponse Mutator
 * @returns {null}
 */
function addRating() {
    ratings.push(newRating);
    invalidResponse = 0;
}


/**
 * @method
 * @desc Average Rating Mutator
 * @returns {null}
 */
function setAverageRating() {
    let ratingSum = Number(0);
    const ratingTotal = ratings.length;
    for (let i = 0; i < ratingTotal; i++) {
        ratingSum = ratingSum + ratings[i];
    }
    let averageRating = ratingSum / ratingTotal;
    printRatingAverage(averageRating);
}


/**
 * @method
 * @desc Print Array
 * @returns {null}
 */
function printRatingAverage(averageRating) {
    console.clear();
    console.log( "The average rating for " + movieTitle + " is " + averageRating + ".");
}

/*Design a program for the Hollywood Movie Rang Guide, in which users continuously enter a value
from 0 to 5 that indicates the number of stars they are awarding to a movie title they are prompted
for. The program executes continuously unl a user decides to quit. If a user enters a star value that
does not fall in the correct range, re-prompt the user three (3) times until a correct
value is entered. At the end of the program, display the average star rating for the movie.*/