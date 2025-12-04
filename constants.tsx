import { CaseStudy, AiType } from './types';

export const APP_TITLE = "1.2 Tipos de IA";
export const APP_SUBTITLE = "Explicados con ejemplos del sector público";

export const INTRO_TEXT = `
La inteligencia artificial no es una sola tecnología, sino un abanico de enfoques que varían en complejidad, autonomía y requisitos de datos. Comprender esa diversidad resulta esencial para que los servidores públicos elijan soluciones acordes con cada problema y anticipen los desafíos éticos.

Distinguir los distintos tipos de IA no es un ejercicio puramente académico. Cuando una entidad opta por un sistema de reglas estáticas o por un modelo generativo de gran escala, está tomando decisiones sobre transparencia, gobernanza de datos, inversión en infraestructura y riesgos de sesgo.
`;

export const AI_TYPES: AiType[] = [
  {
    name: "ANI (IA Estrecha)",
    description: "Sistemas diseñados para ejecutar una sola tarea con precisión superior a la humana. Es la forma dominante hoy.",
    example: "Bürokratt (Estonia): Asistentes virtuales para trámites.",
    icon: "Cpu"
  },
  {
    name: "AGI (IA General)",
    description: "Teórica. Agente capaz de transferir conocimiento entre dominios muy diversos.",
    example: "No existe ejemplo operativo actual.",
    icon: "Brain"
  },
  {
    name: "IA Generativa",
    description: "Capaz de producir texto, imágenes o video combinando patrones aprendidos.",
    example: "Chatbots que redactan borradores de informes.",
    icon: "Sparkles"
  },
  {
    name: "Máquinas Reactivas",
    description: "Actúan solo con la información presente. Sin memoria de largo plazo.",
    example: "Motores de ajedrez antiguos.",
    icon: "Zap"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    country: "Estonia",
    title: "Bürokratt",
    description: "Red de asistentes virtuales que permite a la ciudadanía acceder a trámites desde un único canal conversacional.",
    impact: "Interoperabilidad de bots sectoriales en una sola interfaz.",
    tags: ["Atención Ciudadana", "ANI", "Eficiencia"]
  },
  {
    country: "Reino Unido",
    title: "Clínica Digital Flok",
    description: "Avatar entrenado con videos para fisioterapia. Atendió a 2.500 pacientes para dolores lumbares.",
    impact: "Reducción del 55% en lista de espera. 856 horas clínicas liberadas al mes.",
    tags: ["Salud", "Visión Artificial", "Automatización"]
  },
  {
    country: "Argentina",
    title: "SAT (Mendoza)",
    description: "Sistema de Alerta Temprana para predecir abandono escolar usando asistencia y desempeño.",
    impact: "Reducción de deserción del 7.1% al 6.4% en un año.",
    tags: ["Educación", "Machine Learning", "Predictivo"]
  },
  {
    country: "Francia",
    title: "Detección de Fraude",
    description: "Algoritmo de puntuación de riesgos en seguridad social.",
    impact: "Controversia: Amnistía Internacional señala discriminación a familias de bajos ingresos.",
    tags: ["Seguridad Social", "Ética", "Riesgo de Sesgo"]
  }
];

export const ETHICS_POINTS = [
  {
    title: "Transparencia",
    desc: "Crítica cuando los modelos alimentan decisiones administrativas. Requiere explicaciones claras y vías de apelación."
  },
  {
    title: "Sesgo Algorítmico",
    desc: "En reglas, el sesgo está en la lógica. En redes neuronales, emerge de datos históricos y es difícil de eliminar."
  },
  {
    title: "Rendición de Cuentas",
    desc: "¿Quién responde por un error de IA? La responsabilidad es del organismo, no de la tecnología."
  },
  {
    title: "Protección de Datos",
    desc: "Modelos de gran escala requieren volúmenes enormes. Se debe garantizar la desidentificación (ej. NHS Foresight)."
  }
];

// Full text context for the AI
export const FULL_CONTEXT_TEXT = `
TIPOS DE IA explicados con ejemplos del sector público. 
INTRODUCCIÓN: La inteligencia artificial no es una sola tecnología, sino un abanico de enfoques. Comprender su diversidad es esencial para servidores públicos. 
1. CLASIFICACIONES AMPLIAS: IA estrecha (ANI) ejecuta una sola tarea (ej. Bürokratt en Estonia). IA General (AGI) es teórica. Modelos multitarea y cognitivos (reactivos vs memoria limitada vs teoría de la mente).
2. ENFOQUES METODOLÓGICOS: IA Simbólica (reglas explícitas, auditable pero rígida). Aprendizaje Supervisado (aprende de datos etiquetados, ej. SAT en Mendoza para deserción escolar). Aprendizaje por Refuerzo (recompensas, ej. optimizar semáforos). Aprendizaje No Supervisado (patrones ocultos). IA Conexionista (Redes profundas, ej. NHS Foresight). IA Generativa (produce contenido, riesgo de alucinación).
3. DOMINIOS Y CASOS: Atención ciudadana (Bürokratt), Salud (Flok en UK, fisioterapia), Educación (SAT Mendoza), Seguridad Social (Fraude en Francia, riesgo de sesgo), Construcción (visión artificial en puentes), Emergencias (drones).
4. ÉTICA Y GOBERNANZA: Transparencia (Directiva Canadá), Sesgo (discriminación en Francia), Rendición de Cuentas (responsabilidad humana), Protección de Datos, Explicabilidad (XAI), Participación Ciudadana.
`;