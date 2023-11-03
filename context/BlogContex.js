import React from "react";


const BlogContext = React.createContext();



export const BlogProvider = ({children}) =>{
    const blogPosts =[{title:'React Native' },{title: 'JavaScripy'}]

    return <BlogContext.Provider value={blogPosts} >{children}</BlogContext.Provider>;
}

export default BlogContext;