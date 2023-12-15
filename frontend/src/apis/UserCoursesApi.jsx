// const Update_Relation = 'http://tu-servidor.com/api/v1/user-courses';

// try {
//   const response = await fetch(`${Update_Relation}/${}/${}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       // Puedes agregar otros encabezados si es necesario (por ejemplo, token de autenticación)
//     },
//     body: JSON.stringify({
//       isFavorite: true, // Reemplaza con el valor real de isFavorite
//       // Otros datos que necesites enviar en el cuerpo de la solicitud
//     }),
//   });

//   if (!response.ok) {
//     // Manejo de errores si la respuesta no es exitosa
//     throw new Error('Error al actualizar la relación entre usuarios y cursos');
//   }

//   const updatedUserCourse = await response.json();
//   console.log('Relación actualizada con éxito:', updatedUserCourse);
// } catch (error) {
//   console.error('Error en la solicitud PUT:', error);
// }
