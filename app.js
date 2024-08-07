import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth ,db } from "./config.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const profileImg = document.querySelector('#profile-img')
const imgAvatar = document.querySelector('#img-section')

onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);

      const q = query(collection(db, "users"), where("email", "==", user.email));

      const querySnapshot = await getDocs(q);
      let userData = null
      querySnapshot.forEach((doc) => {
        userData = doc.data()
        console.log(userData);
        if(userData.profilePicture){
          profileImg.src = userData.profilePicture
        }else{
          profileImg.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADEQAAICAQEGBAQFBQAAAAAAAAABAgMRBAUSITFBUSIycYEGYZHRExRCU+EjM1Khwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4aAAAAAAAAAZKapXWxrgsyb4AX0mnu1V0aaIOc5PGPuekq+DrrNPvfm6424yk4vd+pGit0+zKZVKvfb/uSSzKXyRtPblal4pQ0/aLWWl9Wv8AQHntp7E12zU5X1J1/uVveicw9k9rK3wK+FqfOOP+HA2rpIQbu06xU3xiv0P7AcwAAAAAAAAAAAAAAAAAASjobPhuR308TmuHDyruaEI70sIzai9yUYV+GuKwl39QNy6/S72Jytss5KSlhL6FE9Nu/wBFwSX7nB/Q5+WAOko3LxVzjbjilU02vYlXq6mW9w6Sj09TmxnKMk4txa6o2Vcrnmx4sx5v8vUDWmt2TXZlS088MoqAAAAAAAAAAAAAAAABOeAyCAAAAAACW23lkAAAAAAAAAAAAAAAAAASQTj5hrAEAAAAALKEnFtLguZDWDe2Ooy1Eozgp70WsSeEbmq+H7vPpZ12Rf6U+KA4gMl1NlM9y2EoS7SRjAAAAAAAAAAAAdDZmyrtfLMWq6Y+ayXJfc0qoOyyMe/U7Vm0Pw6IQq4RVaju/NAd3Q6PZeghGUK422Li7J8X/B5v4ghpY6mL01SrclmSjy+nQ2NNfKUMyfhjzb6s5Grtd18pvuBgAAAAAZKZOM008dzsUbQssag7LI1rhGqleOf2OIuZkds1HcTcYvml19QOztDW6W2uNN0H6qW84+/c4t1arslFPeS5Puu5TIbb5sCAAAAAAAAAABlqluJvq1hESnl+5Mo4pg+7ZiA2vzLVKgn7GsQAAAAAACY8+eC7XDPEouZllJfhgYnzIAAAAAAAAAAErmQWhHeeFzAyZUqXHqnlehiNiGmsn5FlLnLkl7l1XVVvSlKNkl28q/kDVcWlllS9s9+WSgAAAAABKJlwWPcqTkCAAAAAAAAAAALweOZQAZZXWSSi5YiuSRWU21joUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=='
        }
        ;
      });
    } else {
      imgAvatar.innerHTML = `<button><a href = "./login.html">Login</a></button>`
      window.location = './login.html'
    }
  });
  