// Editá este archivo para personalizar todo el sitio.
// Es el único lugar donde tenés que tocar contenido.

export const site = {
  name: "Rebeca Olivera More",
  role: "Analista de Datos",
  location: "Berazategui, Argentina",
  available: true,
  tagline:
    "Transformo datos en decisiones de negocio con Python, SQL y herramientas de BI.",
  email: "rebeca-olivera@live.com.ar",
  cvUrl: "/cv.pdf", // poné tu CV en /public/cv.pdf
  photoUrl: "/foto.png", // poné tu foto en /public/foto.png
  socials: {
    github: "https://github.com/rb-olivera",
    linkedin: "https://www.linkedin.com/in/rb-olivera",
    kaggle: "https://www.kaggle.com/rebecaolivera",
  },
};

export type Project = {
  title: string;
  year: string;
  tools: string[];        // Se muestran como badges y en el subtítulo entre paréntesis
  problem: string;        // Problema a resolver
  course?: string;        // ¿Es parte de un curso? ¿Cuál?
  dataset: string;        // Datasets utilizados
  results: string;        // Resultados breve
  caso?: string;          // Botón "Ver caso" (notebook renderizado)
  dashboard?: string;     // Botón "Ver dashboard" (opcional)
  repo?: string;          // Botón "Ver código" (repo raíz)
  cover?: string;         // Ruta a imagen en /public (opcional)
};

export const projects: Project[] = [
  {
    title: "Análisis de Desempeño de Tiendas — Alura Store",
    year: "2025",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    problem:
      "Determinar cuál de las 4 tiendas de la cadena Alura Store tiene menor eficiencia para tomar la decisión de venta o cierre con base en datos.",
    course: "Challenge 1 de Data Science — Alura Latam & Oracle",
    dataset:
      "4 archivos CSV provistos por Alura Latam con registros de ventas, satisfacción de clientes, costos logísticos y participación por categoría de producto.",
    results:
      "La Tienda 4 concentró los peores indicadores: ingresos bajos, calificación media y logística poco competitiva. Recomendación: venta o cierre, reforzando las Tiendas 2 y 3.",
    caso: "https://github.com/rb-olivera/challenge1-data-science-latam-main/blob/main/AluraStoreLatam.ipynb",
    repo: "https://github.com/rb-olivera/challenge1-data-science-latam-main",
  },
  {
    title: "EDA y Análisis de Churn — Telecom X",
    year: "2026",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    problem:
      "Identificar los factores que determinan la cancelación de clientes (churn) en una empresa de telecomunicaciones y generar insights accionables para reducirla.",
    course: "Challenge de Data Science Parte 1 — Alura Latam & Oracle",
    dataset:
      "JSON anidado extraído desde una API externa con datos de ~7.000 clientes: tipo de contrato, servicios contratados, método de pago y antigüedad.",
    results:
      "Contratos mensuales presentan 4× más churn que los anuales. La baja antigüedad (primeros 3 meses) es el predictor más fuerte. Los pagos automáticos se asocian con mayor retención.",
    caso: "https://github.com/rb-olivera/Telecom-X---AluraLatam/blob/main/TelecomX_ParteUno.ipynb",
    repo: "https://github.com/rb-olivera/Telecom-X---AluraLatam",
  },
  {
    title: "Predicción de Churn con Machine Learning — Telecom X",
    year: "2026",
    tools: ["Python", "scikit-learn", "Pandas", "Seaborn"],
    problem:
      "Construir un modelo clasificador que identifique a los clientes con mayor riesgo de cancelación para habilitar acciones de retención proactivas y basadas en datos.",
    course: "Challenge de Data Science Parte 2 — Alura Latam & Oracle",
    dataset:
      "Dataset limpio exportado del análisis exploratorio de la Parte 1: 7.043 clientes y 21 variables tras el proceso de ETL y EDA previo.",
    results:
      "Regresión Logística alcanzó ROC-AUC ~0.85. Las variables más influyentes fueron antigüedad, cargos mensuales y tipo de contrato. Modelos exportados (.pkl) listos para scoring en producción.",
    caso: "https://github.com/rb-olivera/Telecom-X-Parte-Dos---AluraLatam/blob/main/Telecom_X_ParteDos.ipynb",
    repo: "https://github.com/rb-olivera/Telecom-X-Parte-Dos---AluraLatam",
  },
];

export type Specialty = {
  title: string;
  description: string;
  tags: string[];
};

export const specialties: Specialty[] = [
  {
    title: "Análisis Exploratorio",
    description:
      "Limpieza, transformación y análisis de datasets complejos para encontrar patrones y responder preguntas de negocio.",
    tags: ["Python", "Pandas", "NumPy"],
  },
  {
    title: "Visualización & BI",
    description:
      "Dashboards interactivos y reportes ejecutivos que convierten métricas en decisiones claras.",
    tags: ["Power BI", "Looker Studio", "Tableau"],
  },
  {
    title: "SQL & Modelado",
    description:
      "Diseño de queries eficientes, transformación de datos y modelado dimensional para análisis escalable.",
    tags: ["PostgreSQL", "BigQuery", "dbt"],
  },
];
