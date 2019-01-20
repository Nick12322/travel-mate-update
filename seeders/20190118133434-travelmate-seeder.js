'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
          name: "Brad Stevens",
          email: "bstevens@hotmail.com",
          password: 'password',
          location: "Paris",
          interests: "Sports, Outdoors, Night Scene",
          about: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
          activities: "Blah blah blah",
          profilePhoto: "https://images.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          coverPhoto: "https://images.unsplash.com/photo-1495401246624-593eb4b920ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8257fb59fbb7007ed2c200404795641&auto=format&fit=crop&w=800&q=60",
          username: "bradS",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Simon Robben",
          email: "srobben@gmail.com",
          password: "password",
          location: "Austin",
          interests: "Fine Dining, Art & Museums, Music Events, Sight Seeing",
          about: "Cupcake ipsum dolor sit. Amet chocolate cake tiramisu jelly beans dragée halvah tiramisu I love. Tootsie roll bear claw fruitcake chocolate I love jujubes toffee fruitcake powder. Marshmallow dessert fruitcake danish biscuit ice cream. Tiramisu lemon drops sesame snaps. Cookie cupcake muffin. Macaroon halvah oat cake caramels danish. Carrot cake halvah chocolate. Caramels danish sesame snaps sweet.",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "sRobben",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Tim Johnson",
          email: "tjohnson@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Whatever",
          about: "What up!!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://steemitimages.com/DQmSA6J7q5C5bMFiHQ85XgBXsYE3fZmBcAmjPvJNYkStBRQ/3403978938_249c74d920_b.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Alan Robb",
          email: "arobb@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Whatever you want",
          about: "Excited to meet you!!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://steemitimages.com/DQmSA6J7q5C5bMFiHQ85XgBXsYE3fZmBcAmjPvJNYkStBRQ/3403978938_249c74d920_b.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
