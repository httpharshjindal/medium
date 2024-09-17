import { useNavigate } from "react-router-dom"
import Avatar from "./Avatar"

type BlogCardType ={
    blogId:string,
    author:string,
    title:string,
    content:string,
    thumbnail?:string,
    date:string
}

function BlogCard({blogId,author,title,content,thumbnail,date}:BlogCardType){
    const queryString = window.location.search
    const param = new URLSearchParams(queryString)
    const navigate = useNavigate()
    return(
        <div className="w-2/3 h-full p-5 border-b-2" onClick={()=>{
            param.set("id",blogId)
            navigate(`/blog/${blogId}`)
        }}>
            <div className="flex items-center gap-2">
                <Avatar username={author}/>
                <h1>{author}</h1>
            </div>
            <div className="flex ">
                <div className="w-3/4 pt-2">
                    <h1 className="text-2xl font-bold ">{title}</h1>
                    <p>{content.slice(0,100)}</p>
                </div>
                <div className="w-1/4 object-contain"><img src={thumbnail} alt="" /></div>
            </div>
            
            <div className="flex gap-2 items-center">
            <i className="ri-calendar-line"></i>
            <h1 className="text-sm font-extralight ">{date}</h1>
            </div>
        </div>
    )
}

export default BlogCard