// import React from 'react'
// import { useState, useEffect } from 'react';
// import { PerfilPelicula } from '../PerfilPelicula/PerfilPelicula';
// import './DeslizadorHorizontal.css'

// export const DeslizadorHorizontal = ({ peticionApi }) => {

// //  Funcion de peticiones a api
//     const [data, setData] = useState([]);
//     const [posicion, setPosicion] = useState(0);

//     useEffect(() => {
//         peticionApi
//             .then((data) => {
//                 setData(data);
//                 console.log('populares', data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

// // Funciones para deslizador
//     const cantidadTotalElementos = data.results ? data.results.length : 0;
//     const avanzarCarrusel = () => {
//         if (posicion < cantidadTotalElementos - 1) {
//             setPosicion(posicion + 1);
//         }
//     };
//     const retrocederCarrusel = () => {
//         if (posicion > 0) {
//             setPosicion(posicion - 1);
//         }
//     };
//     const estiloContenedorItems = {
//         transform: `translateX(-${posicion * 0}px)`,
//     };
 

//     return (
//         <article className="contenedor">
//             <div className="control control-avanzar" onClick={avanzarCarrusel} disabled={posicion >= cantidadTotalElementos - 1}>
//                 <img src="../public/Iconos/next.png" alt="" />
//             </div>
//             <section className="contenedor-items" >
//                 {data.results &&
//                     data.results.slice(posicion).map((item) => (
//                         <div className="item" key={item.id} style={estiloContenedorItems}>
//                             <PerfilPelicula
//                                 key={item.id}
//                                 tituloPelicula={item.original_title}
//                                 posterPelicula={item.poster_path}
//                                 fechaEstreno={item.release_date}
//                             ></PerfilPelicula>
//                         </div>
//                     ))}
//             </section>
//             <div className="control control-retroceder" onClick={retrocederCarrusel} disabled={posicion <= 0}>
//                 <img src="../public/Iconos/next.png" alt="" />
//             </div>
//         </article>
//     );
// };

// import React, { useState, useEffect } from 'react'

// import {  Pagination} from 'swiper'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
// import { PerfilPelicula } from '../PerfilPelicula/PerfilPelicula';
// import './DeslizadorHorizontal.css';
 
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// SwiperCore.use([Navigation]);

// const DeslizadorHorizontal = ({ peticionApi }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     peticionApi
//       .then((data) => {
//         setData(data);
//         console.log('populares', data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
  //   <div className="contenedor">
  //     <Swiper
  //       spaceBetween={15} // Espacio entre las películas
  //       slidesPerView={3} // Cantidad de películas visibles a la vez
  //       navigation // Agregar botones de navegación
  //     >
  //       {data.results &&
  //         data.results.map((item) => (
  //           <SwiperSlide key={item.id}>
  //             <PerfilPelicula
  //               tituloPelicula={item.original_title}
  //               posterPelicula={item.poster_path}
  //               fechaEstreno={item.release_date}
  //             />
  //           </SwiperSlide>
  //         ))}
  //     </Swiper>
  //   </div>



//   <div className="container">
//   <div className="swiperContainer">
//     <Swiper
//       modules={[Pagination, Autoplay]}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false
//       }}
//       pagination={{
//         el: ".pagination",
//         clickable: true,
//       }}
//       slidesPerView={4}
//       breakpoints={{
//         "@0.00": {
//           slidesPerView: 1,
//           spaceBetween: 25,
//         },
//         "@0.50": {
//           slidesPerView: 1.25,
//           spaceBetween: 25,
//         },
//         "@1.00": {
//           slidesPerView: 2,
//           spaceBetween: 25,
//         },
//         "@1.25": {
//           slidesPerView: 2.5,
//           spaceBetween: 20,
//         },
//         "@1.50": {
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//         "@1.75": {
//           slidesPerView: 4,
//           spaceBetween: 20,
//         },
//       }}
//     >
//        <h2>sdcdsvsdvsdvv</h2>
//       <h2>sdcdsvsdvsdvv</h2>
//      <h2>sdcdsvsdvsdvv</h2>
//     </Swiper>
//   </div>
//   <div className="pagination" />
// </div>
//     );




// };

// export default DeslizadorHorizontal;
