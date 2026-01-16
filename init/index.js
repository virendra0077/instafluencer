const mongoose = require('mongoose');
const Listing = require('../module/listing.js');
const data = require('./data.js');

const mongoURI = 'mongodb+srv://virendra_db_user:Virendra26@cluster0.ggz575v.mongodb.net/?appName=Cluster0';

async function main() {
  await mongoose.connect(mongoURI);
  console.log('Connected to MongoDB');
}

main()
  .then(() => console.log('Mongoose connection established'))
  .catch(err => console.error(err));

const seedDatabase = async () => {
  try {
    await Listing.deleteMany({});
    console.log('Existing listings deleted');

    const seededListings = data.data.map(obj => ({
      ...obj,
      owner: "6963b4b4e9f55ade46e230ef"
    }));

    await Listing.insertMany(seededListings);
    console.log('Database seeded with initial data');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
