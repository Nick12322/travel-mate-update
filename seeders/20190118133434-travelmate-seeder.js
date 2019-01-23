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
          profilePhoto: "https://pbs.twimg.com/profile_images/441506305912889344/o6X0I4il.jpeg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Sara Thompson",
          email: "sthompson@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Cool things",
          about: "Just a girl living my life.",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://assets.capitalfm.com/2018/23/lilliya-scarlett-instagram-1528814125-custom-0.png",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Mike Connoly",
          email: "mconnoly@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Having a blas",
          about: "Can't wait to show you around!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://media.glamour.com/photos/58336fd44e6d66172e161a3a/master/w_1280,c_limit/0117-GL-LIFE01-02.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Mike Ronson",
          email: "mronson@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Having a blasttt",
          about: "Can't wait to show you around!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://images.pexels.com/photos/447189/pexels-photo-447189.jpeg?cs=srgb&dl=adult-business-businessman-447189.jpg&fm=jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Melanie Ronson",
          email: "melronson@gmail.com",
          password: "password",
          location: "San Diego",
          interests: "Having a blasttt",
          about: "I love adventures!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://timedotcom.files.wordpress.com/2018/01/stephanie-schriock-motto.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Vera Lamb",
          email: "vlamb@gmail.com",
          password: "password",
          location: "Atlanta",
          interests: "Having a blasttt",
          about: "I love adventures!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Ryan Tomas",
          email: "rtomas@gmail.com",
          password: "password",
          location: "Atlanta",
          interests: "Having a blasttt",
          about: "I love adventures!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/470/2015/10/23122001/CommonMan.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Liza Gonzalez",
          email: "lgonzalez@gmail.com",
          password: "password",
          location: "San Francisco",
          interests: "Having a blasttt",
          about: "I love adventures!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://www.newonline.org/sites/default/files/images/blog/Diversity_MuslimWomen_Krawczyk.jpg",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          name: "Archie Stevens",
          email: "astevens@gmail.com",
          password: "password",
          location: "San Francisco",
          interests: "Having a blasttt",
          about: "I love adventures!",
          activities: "It's a blah blah kind of blah blah blah blah blah",
          profilePhoto: "https://nationalpostcom.files.wordpress.com/2018/08/cpt501-the-canadian-press3.jpg?quality=80&strip=all&w=780",
          coverPhoto: "https://images.unsplash.com/photo-1504660069764-2b37e279874a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7945a4d590c31ea4887f50ab42dd6d17&auto=format&fit=crop&w=800&q=60",
          username: "tJohnson",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
