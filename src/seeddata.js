import { collection, addDoc, doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth } from './config/firebase';

const checkDataSeeded = async () => {
  try {
    const metadataRef = doc(db, 'metadata', 'seedStatus');
    const metadataSnapshot = await getDoc(metadataRef);
    return metadataSnapshot.exists() ? metadataSnapshot.data().seeded || false : false;
  } catch (error) {
    console.error('Error checking data seeded status:', error);
    return false;
  }
};

const seedData = async () => {
  try {
    console.log('Checking if data is already seeded...');
    // Check if data is already seeded
    const isDataSeeded = await checkDataSeeded();

    if (!isDataSeeded) {
      console.log('Data is not seeded. Proceeding with seeding...');

      // Data is not seeded, proceed with seeding
      const vehiclesCollection = collection(db, 'cars');
      const vehiclesData = [
        {
          make: 'Peugeot',
          model: '3008',
          type: 'SUV',
          transmission: 'Automatic',
          price_per_day: 100,
          description:
            'Discover the PEUGEOT SUV 3008 with its unique design...',
          properties: {
            motor_power_hp: 120,
            fuel_type: 'Diesel',
            engine_capacity_cc: 1560,
            traction: '4x2',
          },
        },
        {
          make: 'Ford',
          model: 'Focus',
          type: 'Hatchback',
          transmission: 'Automatic',
          price_per_day: 70,
          description:
            "The Ford Focus, known for its sharp handling and expressive design, offers an exciting driving experience. It's a versatile hatchback that's both efficient and fun to drive.",
          properties: {
            motor_power_hp: 150,
            fuel_type: 'Petrol',
            engine_capacity_cc: 2000,
            traction: 'FWD',
          },
        },
        {
          make: 'Renault',
          model: 'Megane',
          type: 'Sedan',
          transmission: 'Automatic',
          price_per_day: 80,
          description:
            'Renault Megane stands out with its sleek contours and sophisticated style. The sedan is equipped with advanced technology for a comfortable and safe journey.',
          properties: {
            motor_power_hp: 130,
            fuel_type: 'Hybrid',
            engine_capacity_cc: 1400,
            traction: 'AWD',
          },
        },
        {
          make: 'Fiat',
          model: 'Fiorino',
          type: 'MPV',
          transmission: 'Manual',
          price_per_day: 50,
          description:
            'Fiat Fiorino is a compact MPV that offers a practical and economical solution for city driving and small cargo transport. Its compact dimensions make it ideal for navigating narrow streets.',
          properties: {
            motor_power_hp: 95,
            fuel_type: 'Petrol',
            engine_capacity_cc: 1300,
            traction: 'FWD',
          },
        },
      ];

      for (const vehicle of vehiclesData) {
        await addDoc(vehiclesCollection, vehicle);
      }

      // Update the 'seedStatus' document to indicate that data has been seeded
      const metadataRef = doc(db, 'metadata', 'seedStatus');
      await setDoc(metadataRef, { seeded: true });


      console.log('Car data seeded successfully.');

      return true;
    } else {
      console.log('Data is already seeded.');
      return false;

    }
  } catch (error) {
    console.error('Error during seeding:', error);
    return false;
  }
};

export default seedData;

