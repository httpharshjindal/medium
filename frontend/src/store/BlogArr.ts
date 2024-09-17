import { atom } from "recoil";

type blog = {
    id: string;
    title: string;
    content: string;
    author: {
      name: string;
      email: string;
      id: string;
    };
  };

const BlogArr = atom({
    key:"BlogArr",
    default:<blog[]>[]
})


export default  BlogArr