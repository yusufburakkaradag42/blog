import React , { useReducer} from "react";


const BlogContext = React.createContext();
const blogReducer = (state,action) => {
    switch(action.type) {
        case 'add_blogpost':
            return [...state,{title:'Anguler'}];
            default:
                return state ;
    }
}


export const BlogProvider = ({children}) =>{
    const [blogPost, dispatch] = useReducer(blogReducer , [
        {title:'React Native' },
        {title: 'JavaScripy'},
    ]
    )
  
    const addBlogPost = () =>{
     
        dispatch({type: 'add_blogpost'})
    }

    return <BlogContext.Provider value={{data:blogPost , addBlogPost}} >{children}</BlogContext.Provider>;
}

export default BlogContext;