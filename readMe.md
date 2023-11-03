

## start
 npx create-expo-app (klasöradı)
 cd klasöradı
 npx expo start 

## Navigation Kurulumu 
        npm install @react-navigation/native
## expo kulladığımız için 
        npm install react-native-screens react-native-safe-area-context


        npm install @react-navigation/native-stack


## BlogContext.js Kullanım



Projenize "BlogProvider" bileşenini eklemek için şu adımları izleyebilirsiniz:

1. Projenizin kök dosyasında, bu kodları içe aktarın:

```javascript
import React, { useReducer } from "react";
```

2. "BlogContext" ve "blogReducer" fonksiyonunu ekleyin:

```javascript
const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: 'Angular' }];
        default:
            return state;
    }
};
```

3. "BlogProvider" bileşenini projenize ekleyin ve "children" bileşenlerini içine yerleştirin:

```javascript
export const BlogProvider = ({ children }) => {
    const [blogPost, dispatch] = useReducer(blogReducer, [
        { title: 'React Native' },
        { title: 'JavaScript' },
    ]);

    // ...

    return <BlogContext.Provider value={{ data: blogPost, addBlogPost }}>{children}</BlogContext.Provider>;
};
```

4. İhtiyacınıza göre "addBlogPost" işlevini kullanarak yeni blog gönderileri ekleyin.

5. Bileşenlerinizde "BlogContext" bağlamını kullanarak verilere ve işlevlere erişebilirsiniz.





