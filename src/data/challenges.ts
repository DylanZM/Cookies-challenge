export const challenges = [
  "Hazle un cumplido sincero a alguien hoy.",
  "Bebe al menos 2 litros de agua durante el día.",
  "Aprende una palabra nueva y úsala en una conversación.",
  "Dedica 15 minutos a meditar o respirar profundamente.",
  "Escribe tres cosas por las que estés agradecido hoy.",
  "Da un paseo de 20 minutos sin mirar tu teléfono.",
  "Lee al menos 10 páginas de un libro.",
  "Prueba una comida o receta nueva.",
  "Organiza y limpia tu espacio de trabajo o habitación.",
  "Envía un mensaje a un amigo con el que no has hablado en un tiempo.",
  "Haz una pequeña acción amable y anónima por alguien.",
  "Desconéctate de las redes sociales por 24 horas.",
  "Dibuja algo durante 10 minutos, no importa si no eres bueno.",
  "Escucha un podcast o charla sobre un tema que desconozcas.",
  "Haz 15 minutos de estiramientos o yoga."
];

export function getRandomChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  return challenges[randomIndex];
}
