

import React from 'react';
import './App.css';
import  Cards  from './Cards.jsx';


function App() {
  const products = [
    {   
        id: 1,
        title: "Мужские Кроссовки Nike Blazer Mid Suede",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3IloqkRzd33qrUYgonSHR2OBuzbpTuOb0xCX49u6o6QIbv3KlSU1fUhD40J25nqWMVgsXLvzRwdmmzf092VAtxr5d1Vq-1b8d5MDydhwdvP3sV8MRLCgN4QE",
        price: "12 999 som"
    },
    {
       id: 2,  
       title: "Женские Кроссовки Adidas Superstar",
       image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6BRfOtYKQK2Zg-jLOkMor9ZgBCG0p48cbqClT22awsBRMY4WRMXUyK7LQDYOGvfoEnuqrLUz6JP3gYNjTDFWTjdMiDRWOWog1JU37XElUlxn57GdJDFJQ2Q",
       price: "9 999 som"
    },
    {
       id: 3,  
       title: "Мужские Кроссовки Puma RS-X3",
       image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGuwe5-jlU1OR_AR6yc91imb-p3Q7y-OqO4frT5q8-FUFEqbaa103IeY0IxaDSYVhAq6I-wKmr_Fc_doUq36F3eEpvt7jjR5C70D7UqEw",
       price: "10 499 som"
    },
    {
      id: 4,  
      title: "Женские Кроссовки Reebok Classic Leather",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_cZTzu9OCEErjqC3uIM_-8aCm0fBcEAR6zC2iUHayW1mvG7voql0Rn3flyFlIWxL6uwV8DS06mKdkxAWZxf1WIQM_TzIbIYhjXaCHJdx73qsLhUp8OIEWng",
      price: "8 499 som"
    },
    {
      id: 5,  
      title: "Мужские Кроссовки New Balance 574",
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVKH14PhGCes8iTnnzmwh8IhL1aQlLNOW9cY4-hVS3DJ-4SIjyLOE97FcakFkKAaaKj2UNCLFtvFGIEb6tnpqhzKBZPlA4hroqMjv0qZv0XCGC8_a2OT1bog8",
      price: "11 999 som"
    },
    {   
      id: 6,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3IloqkRzd33qrUYgonSHR2OBuzbpTuOb0xCX49u6o6QIbv3KlSU1fUhD40J25nqWMVgsXLvzRwdmmzf092VAtxr5d1Vq-1b8d5MDydhwdvP3sV8MRLCgN4QE",
      price: "12 999 som"
  },
  {
     id: 7,  
     title: "Женские Кроссовки Adidas Superstar",
     image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6BRfOtYKQK2Zg-jLOkMor9ZgBCG0p48cbqClT22awsBRMY4WRMXUyK7LQDYOGvfoEnuqrLUz6JP3gYNjTDFWTjdMiDRWOWog1JU37XElUlxn57GdJDFJQ2Q",
     price: "9 999 som"
  },
  {
     id: 8,  
     title: "Мужские Кроссовки Puma RS-X3",
     image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGuwe5-jlU1OR_AR6yc91imb-p3Q7y-OqO4frT5q8-FUFEqbaa103IeY0IxaDSYVhAq6I-wKmr_Fc_doUq36F3eEpvt7jjR5C70D7UqEw",
     price: "10 499 som"
  },
  {
    id: 9,  
    title: "Женские Кроссовки Reebok Classic Leather",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_cZTzu9OCEErjqC3uIM_-8aCm0fBcEAR6zC2iUHayW1mvG7voql0Rn3flyFlIWxL6uwV8DS06mKdkxAWZxf1WIQM_TzIbIYhjXaCHJdx73qsLhUp8OIEWng",
    price: "8 499 som"
  },
  {
    id: 10,  
    title: "Мужские Кроссовки New Balance 574",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVKH14PhGCes8iTnnzmwh8IhL1aQlLNOW9cY4-hVS3DJ-4SIjyLOE97FcakFkKAaaKj2UNCLFtvFGIEb6tnpqhzKBZPlA4hroqMjv0qZv0XCGC8_a2OT1bog8",
    price: "11 999 som"
  }
  ];

  return (
    <div className='box'>
      {products.map((product) => (
        <Cards key={product.id} zena="Цена:" shoes={product} />
      ))}
    </div>
  );
}

export default App;


