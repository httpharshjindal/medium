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

const currentBlogAtom = atom({
    key:"currentBlogAtom",
    default:<blog>{}
})

export default currentBlogAtom