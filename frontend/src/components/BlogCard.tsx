import { useNavigate } from "react-router-dom"
import Avatar from "./Avatar"

type BlogCardType ={
    blogId:string,
    author:string,
    title:string,
    content:string,
    date:string
}

function BlogCard({blogId,author,title,content,date}:BlogCardType){
    const queryString = window.location.search
    const param = new URLSearchParams(queryString)
    const navigate = useNavigate()
    return(
        <div className="w-full sm:w-4/6 h-full px-3 py-3 sm:px-2 border-b-2" onClick={()=>{
            param.set("id",blogId)
            navigate(`/blog/${blogId}`)
        }}>
            <div className="flex items-center gap-2">
                <Avatar username={author}/>
                <h1>{author}</h1>
            </div>
            <div className="flex ">
                <div className="w-full pt-2">
                    <h1 className="text-2xl font-bold ">{title}</h1>
                    <p>{content.slice(0,100)}</p>
                </div>
            </div>
            
            <div className="flex gap-2 items-center">
            <i className="ri-calendar-line"></i>
            <h1 className="text-sm font-extralight ">{date}</h1>
            </div>
        </div>
    )
}

export default BlogCard
