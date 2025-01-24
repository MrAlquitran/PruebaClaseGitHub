import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Ejercicio1

// function HelloWorld() {
//   const Estilo = {
//     width: '200px',
//     height: '200px',
//     backgroundColor: 'orange',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: '20px',
//     fontWeight: 'bold'
//   };

//   return (
//     <div style={Estilo}>
//       Hello, World!
//     </div>
//   );
// }

// function App() {
//   let nuevodiv = <div>Hola!</div>
//   return (
//     <>
//       {nuevodiv}
//       <p>Pablo</p>
//       <HelloWorld />
//     </>
//   );
// }

// export default App;

// //Ejercicio2
// function App() {
//   const controlClick = () => {
//     alert('Has clickado el botón');
//   };

//   return (
//     <>
//       <button onClick={controlClick}>Pulsame</button>
//       <p>Pablo</p>
//     </>
//   );
// }

// export default App;

//Ejercicio3

// function Button({ label, onClick }) {
//   return <button onClick={onClick}>{label}</button>;
// }

// function App() {
//   const controlClick = (label) => {
//     alert(`Pulsaste ${label}!`);
//   };

//   return (
//     <>
//       <Button label="boton 1" onClick={() => controlClick('boton 1')} />
//       <Button label="boton 2" onClick={() => controlClick('boton 2')} />
//       <Button label="boton 3" onClick={() => controlClick('boton 3')} />
//       <p>Pablo</p>
//     </>
//   );
// }

// export default App;

//Ejercicio4

// function App() {
//   const [contador, setCount] = useState(0);

//   const controlClick = () => {
//     setCount(contador + 1);
//     console.log(contador + 1);
//   };

//   return (
//     <>
//       <button onClick={controlClick}>¡Pulsame!</button>
//       <p>Has pulsado {contador} veces el boton</p>
//     </>
//   );
// }

// export default App;

//Ejercicio5

// function App() {
//   const animales = ['perro', 'gato', 'pollo', 'vaca', 'oveja', 'ornitorrico', 'caballo', 'cocodrilo'];

//   return (
//     <>
//       <ul>
//         {animales.map((animal, index) => (
//           <li key={index}>{animal}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

//Ejercicio6

// function ListaAnimales({ animales }) {
//   const emojiMap = {
//     perro: '🐶',
//     gato: '🐱',
//     pollo: '🐔',
//     vaca: '🐮',
//     oveja: '🐑',
//     caballo: '🐴',
//   };

//   // Estilos en formato JavaScript
//   const containerEstilo = {
//     fontFamily: 'Arial, sans-serif',
//     margin: '0 auto',
//     width: '200px',
//   };

//   const objetoEstilo = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//     marginBottom: '10px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };

//   const estiloUltimoObjeto = {
//     marginBottom: '0',
//   };

//   const emojiEstilo = {
//     width: '20px',
//     height: '20px',
//   };

//   return (
//     <div style={containerEstilo}>
//       {animales.map((animal, index) => (
//         <div
//           key={index}
//           style={{
//             ...objetoEstilo,
//             ...(index === animales.length - 1 ? estiloUltimoObjeto : {}),
//           }}
//         >
//           <span style={emojiEstilo}>{emojiMap[animal]}</span>
//           <span>{animal}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// function App() {
//   const animales = ['perro', 'gato', 'pollo', 'vaca', 'oveja', 'caballo'];

//   return (
//     <>
//       <ListaAnimales animales={animales} />
//     </>
//   );
// }

// export default App;


//Ejercicio 7

// function App() {
//   const [Nombre, indicarNombre] = useState('');
//   const [Apellido, indicarApellido] = useState('');

//   const Saludo = () => {
//     alert(`Bienvenidoo ${Nombre} ${Apellido}`);
//   };

//   return (
//     <>
//       <div>
//         <label>
//           Nombre:
//           <input
//             type="text"
//             value={Nombre}
//             onChange={(e) => indicarNombre(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Apellido:
//           <input
//             type="text"
//             value={Apellido}
//             onChange={(e) => indicarApellido(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={Saludo}>Recibe tu saludo</button>
//     </>
//   );
// }

// export default App;

//Ejercicio 8

function ListaChistes({ chistes }) {
  return (
    <div>
      {chistes.map((chiste, index) => (
        <div key={index}>
          <h3>{chiste.inicio}</h3>
          <p>{chiste.broma}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const chistes = [
    { inicio: '¿Sabes la diferencia entre un aparato reproductor masculino y una silla?', broma: 'Ten cuidado donde te sientas...' },
    { inicio: '¿Qué hace una abeja en el gimnasio?', broma: 'Zum-ba.' }
  ];

  return (
    <>
      <ListaChistes chistes={chistes} />
    </>
  );
}

export default App;