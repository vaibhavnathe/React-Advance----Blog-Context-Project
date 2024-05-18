import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {


    return (
        <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-1 mt-[66px] mb-[70px] justify-center">
            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-large">{post.title}</span>
            </NavLink>
            <p className="text-xs mt-[4px]">
                By <span className="italic">{post.author}</span>
                on {" "} 
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span>{post.category}</span>
                </NavLink>
            </p>
            <p className="text-sm mt-[4px]">Posted on {post.date}</p>
            <p className="text-md mt-[14px]">{post.content}</p>
            <div>
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="text-blue-700 underline font-bold text-xs mt-[5px]">
                            {`#${tag}`}
                        </span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default BlogDetails;