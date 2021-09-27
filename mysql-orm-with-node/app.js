const db = require('./db');
const { User } = db.models;
const { Op } = db.Sequelize;


// async IIFE
(async () => {
    // Sync 'All' tables
    await db.sequelize.sync({force: true});
    try {
        //Instance of the Movie class represents a database row
        const user = await User.create({
            unique_id: 'ab876ry',
            address: '99, Old Lagos Road, Challenge, Ibadan',
            mobile: '08023950246',
            business_name: 'Global Logistics',
            aboutus: 'We are logistics company',
        });
        console.log(user.toJSON());

        // const movie2 = await Movie.create({
        //     title: 'The gods are dead',
        //     runtime: 181,
        //     releaseDate: '2006-10-22',
        //     isAvailableOnVHS: true,
        //     plan: 'paid',
        // });
        //console.log(movie2.toJSON());

        //We don't really need to assign the await to a variable
        // await Movie.create({
        //     title: 'Live and let live',
        //     runtime: 201,
        //     releaseDate: '1998-02-12',
        //     isAvailableOnVHS: true,
        //     plan: 'free',
        // });

        // await Movie.create({
        //     title: 'The Professor',
        //     runtime: 101,
        //     releaseDate: '2000-02-12',
        //     isAvailableOnVHS: true,
        //     plan: 'free',
        // });

        // await Movie.create({
        //     title: 'Diamonds are forever',
        //     runtime: 301,
        //     releaseDate: '2001-02-12',
        //     isAvailableOnVHS: true,
        //     plan: 'paid',
        // });

        // await Movie.create({
        //     title: 'Lethal Weapon',
        //     runtime: 120,
        //     releaseDate: '1999-02-12',
        //     isAvailableOnVHS: true,
        //     plan: 'free',
        // });
        // // Person record
        // const person = await Person.create({
        //     firstName: 'Adebayo',
        //     lastName: 'Ojo',
        // });
        // //console.log(person.toJSON());

        // await Person.create({
        //     firstName: 'Adedotun',
        //     lastName: 'Ojo',
        // });

        // await Person.create({
        //     firstName: 'Omolara',
        //     lastName: 'Ojo',
        // });

        // await Person.create({
        //     firstName: 'Adedoyin',
        //     lastName: 'Ojo',
        // });
        //await sequelize.authenticate();
        //console.log('Connection to the database successful!');

        //find a movie by the Id using findByPk()
        const userById = await User.findByPk(1);
        console.log(userById.toJSON());

        //find a movie with a particular attribute using findOne()
        //const movieByRuntime = await Movie.findOne({where: {runtime: 301}});
        //console.log(movieByRuntime.toJSON());

        //find all movie records using findAll()
        //const allMovies = await Movie.findAll();
        //console.log(allMovies.map(movie => movie.toJSON()));

        //find a movie using findAll() where plan is paid and isAvailableOnVHS is false
        // const movies = await Movie.findAll({
        //     where: {
        //         plan: 'paid',
        //         isAvailableOnVHS: false
        //     }
        // });
        //console.log(movies.map(movie => movie.toJSON()));

        //find movies using findAll() returning selected attributes
        // const movies2 = await Movie.findAll({
        //     attributes: ['id', 'title'], //return only id and title
        //     where: {
                //isAvailableOnVHS: true,
                // releaseDate: {
                //     [Op.gte]: '2001-02-12'
                // },
                // runtime: {
                //     [Op.gt]: 200
                // }, 
        //         title: {
        //             [Op.endsWith]: 'Weapon'
        //         }
        //     },
        // });
        // console.log(movies2.map(movie => movie.toJSON()));

    } catch (error) {
        if(error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            console.error('Validation errors: ', errors);
        } else {
            throw error;
        }
    }
  })();