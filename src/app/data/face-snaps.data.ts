import { FaceSnap } from "../models/face-snap.model";

export const faceSnaps: FaceSnap[]= [
    {
      id: 1,
      title: "test titre class",
      description: "description class model",
      createDate: new Date(), 
      snaps: 0,
      imageUrl: "../../assets/images/book.jpg",
      location: "Paris",
      price: 56.45489465
    },
    {
      id: 2,
      title: "2eme instance",
      description: "description test 2eme instance",
      createDate: new Date(), 
      snaps: 0, 
      imageUrl: "../../assets/images/book-antique.jpg", 
      price: 47.895356 
       
    },
    {
      id: 3,
      title:"3eme instance", 
      description:"description test 3eme instance",
      createDate: new Date(), 
      snaps: 0, 
      imageUrl: "../../assets/images/books.jpg",
      location: "Paris",
      price: 798865.065595

    },
    {
      id: 4,
      title: "4eme instance", 
      description:"description test 4eme instance",
      createDate: new Date(), 
      snaps: 0, 
      imageUrl:"../../assets/images/book-library.jpg",
      location: "montagne" 
    },
    {
      id: 5,
      title:"5eme instance",
      description:"description test 5me instance",
      createDate: new Date(), 
      snaps: 0, 
      imageUrl:"../../assets/images/book-desk.jpg" 
    }
]
