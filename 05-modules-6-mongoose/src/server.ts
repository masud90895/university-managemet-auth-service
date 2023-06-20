
import mongoose from 'mongoose';
import {app} from './app';

const port:number = 5000;

// getting-started.js

// main().catch(err => console.log(err));

// async function main() {
//  try {
//   await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');

//   console.log("database connection successfully established");


//   app.listen(port, () => {
//     console.log(`Server is Lessening ${port}`)
//   })
  
//  } catch (error) {
//   console.log("Failed to connect", error);
  
//  }
// }

// main()


const main = async (): Promise<void> => {
  try {

    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose')
    console.log("successfully started");
    

    
    app.listen(port, () => {
     console.log("server connected");
    });
  } catch (error) {
    console.error(`Server error: ${error}`);
  }
};

main();


