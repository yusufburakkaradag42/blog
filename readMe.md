

## start
 npx create-expo-app (klasöradı)
 cd klasöradı
 npx expo start 

## Navigation Kurulumu 
        npm install @react-navigation/native
## expo kulladığımız için 
        npm install react-native-screens react-native-safe-area-context


        npm install @react-navigation/native-stack


## BlogContext.js 

 İlk olarak , Gerekli React ve useReducer içe aktarıyoruz
 import React, { useReducer } from "react";

Ardından, bir "BlogContext" adında bir bağlam (context) oluşturuyoruz. Bu bağlam, uygulama içindeki verilere erişim sağlar

    `const BlogContext = React.createContext();`

"blogReducer" adında bir fonksiyon oluşturuyoruz. Bu, useReducer ile kullanılacak bir veri yönetim fonksiyonudur. "action" nesnesine bağlı olarak belirli eylemleri işler

  `  const blogReducer = (state, action) => {
        switch (action.type) {
            case 'add_blogpost':
            return [...state, { title: 'Angular' }];
         default:
             return state;
    }
};`

 sadece 'add_blogpost' eylemi işlenir ve "Angular" başlıklı bir blog gönderir.

 "BlogProvider" adında bir bileşen oluşturuyoruz, bu bileşen içinde "blogPost" adında bir durum (state) ve "dispatch" adında bir işlev elde ediyoruz. Bu işlev, "blogReducer" kullanarak veri yönetimini yapar. Başlangıçta, iki blog gönderisiyle başlatılır:

 `   export const BlogProvider = ({ children }) => {
        const [blogPost, dispatch] = useReducer(blogReducer, [
            { title: 'React Native' },
            { title: 'JavaScript' },
    ]);`

    // ...

    return <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>{children}</BlogContext.Provider>;
};
''
`` export const BlogProvider = ({ children }) => {
    const [blogPost, dispatch] = useReducer(blogReducer, [
        { title: 'React Native' },
        { title: 'JavaScript' },
    ]);

    

    return <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>{children}</BlogContext.Provider>;
}; ``
"addBlogPost" adında bir işlev oluşturulur. Bu işlev, "dispatch" işlemini kullanarak "add_blogpost" eylemini çağırır. Bu, yeni bir blog gönderisi ekler:
``    '
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    };
    '``
"BlogContext.Provider" ile sarılı "children" bileşenleri, "BlogContext" bağlamına "data" ve "addBlogPost" değerlerini iletmek için kullanılır
``'
    return <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>{children}</BlogContext.Provider>;
'``
 "BlogProvider" bileşeni içindeki bileşenler "BlogContext" aracılığıyla "blogPost" verisine ve "addBlogPost" işlevine erişebilirler. Bu, verilerin uygulama genelinde paylaşılmasını ve yönetilmesini sağlar.
