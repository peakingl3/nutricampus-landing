# NutriCampus — trazabilidad de 30 HU core

## Criterio de selección

La selección se contrastó con `needfinding_completo.txt`, las 48 HU de `Hu.txt`, `product_backlog.txt`, la Arquitectura Web, los User Flows y los mockups. Se prioriza resolver las situaciones que se repiten en las entrevistas E1–E4: elegir entre clases con poco tiempo y presupuesto, encontrar algo que no produzca pesadez, reemplazar compras impulsivas y bebidas energizantes, llevar comida preparada desde casa y obtener orientación confiable sobre hierro y anemia.

La arquitectura mantiene las cinco secciones principales: **Inicio, Explorar, Planificar, Favoritos y Perfil**. Los flujos A–F cubren acceso/configuración, búsqueda y elección, favoritos, planificación, educación sobre hierro y registro de sensaciones. En esta versión, las HU de Favoritos siguen disponibles porque aparecen en los diseños, pero no se contabilizan dentro de las 30 HU core.

## Trazabilidad del Needfinding

| Cluster del Needfinding | Evidencia de entrevistas | HU core relacionadas |
|---|---|---|
| N1. Horarios académicos que desordenan las comidas | E1 adelanta el almuerzo; E2 come tarde; E3 puede saltarse el almuerzo; E4 lleva un sándwich para sus ventanas libres. | HU-001, 002, 003, 007, 008, 015, 037 |
| N2. Preparar en casa frente a comprar por apuro | E1 y E4 llevan fruta o sándwich; E2 cocina cuando puede; E3 compra frituras por falta de tiempo para cocinar. | HU-019, 020, 025, 037 |
| N3. Precio, rapidez, saciedad y oferta del campus | E1 busca opciones simples de bajo costo; E2 compara precio, tiempo, frescura, proteína y saciedad; E3 compra lo primero que encuentra. | HU-007, 008, 009, 010, 011, 013, 014, 016, 017, 023, 024, 045 |
| N4. Contexto social y académico en la elección | E1 y E2 eligen opciones rápidas con amigos; E1 recurre a energizantes con sueño; E4 prefiere algo ligero antes de un examen. | HU-010, 015, 019, 020, 024 |
| N5. Conocimiento desigual sobre anemia | E1 y E4 expresan dudas; E2 conoce algunos alimentos pero no sabe cantidades; E3 no identifica fuentes de hierro. | HU-018, 026, 027, 028, 029, 030, 032 |
| N6. Pesadez, sueño y deseo de sustitución | E1 quiere cambiar frituras por alternativas sancochadas; E2 reduce gaseosas y frituras por pesadez; E3 quiere cocinar; E4 busca comidas más ligeras. | HU-019, 020, 021, 040, 041 |

## 30 HU core y evidencia de implementación

| HU | Historia | Evidencia funcional | Needfinding |
|---|---|---|---|
| HU-001 | Ingreso rápido a la aplicación | Acceso como invitado y formulario de correo/contraseña de demostración. | N1 |
| HU-002 | Configuración mínima inicial | Asistente de tres pasos: tiempo, presupuesto y lugar; guarda preferencias localmente. | N1, N3 |
| HU-003 | Omitir la configuración inicial | Acción «Omitir» y acceso como invitado; permite configurar después. | N1 |
| HU-007 | Recomendación principal «qué puedo comer ahora» | Recomendación en Inicio ajustada a preferencias y al momento del día. | N1, N3 |
| HU-008 | Filtro por tiempo disponible | Filtro de 5, 10 o 15 minutos con actualización inmediata. | N1, N3 |
| HU-009 | Filtro por presupuesto | Máximo de S/ 5, S/ 10 o S/ 15 y precios en tarjetas. | N3 |
| HU-010 | Filtro por lugar y disponibilidad | Filtro por cafetería, comedor, máquina o local cercano; lugar visible en cada opción. | N3, N4 |
| HU-011 | Combinar y limpiar filtros | Filtros acumulables, etiquetas activas y acción para restablecerlos. | N3 |
| HU-013 | Mensaje cuando no hay resultados | Mensaje con sugerencias y botón «Limpiar filtros». | N3 |
| HU-014 | Búsqueda por nombre | Búsqueda inmediata por nombre, ingrediente, lugar o etiqueta. | N3 |
| HU-015 | Alternativas según el momento del día | Inicio prioriza alimentos asociados a desayuno, almuerzo o snack según la hora local; Explorar permite filtrar por momento. | N1, N4 |
| HU-016 | Tarjeta con tiempo, precio y etiqueta | Tarjetas con precio, minutos, lugar, etiqueta «Ligera» y fuente de hierro cuando corresponde. | N3 |
| HU-017 | Detalle de una alternativa | Diálogo con descripción, datos, ingredientes, alérgenos y sustitución sugerida. | N3 |
| HU-018 | Información nutricional bajo demanda | Sección desplegable en el detalle con contenido orientativo y fuente. | N5 |
| HU-019 | Sustituciones rápidas de snacks | Ideas de reemplazo en el detalle y acceso a opciones rápidas desde Inicio. | N2, N4, N6 |
| HU-020 | Sustituciones de bebidas azucaradas o energéticas | Ideas de agua o refrescos naturales con poca azúcar, enlazadas a orientación del MINSA. | N2, N4, N6 |
| HU-021 | Etiqueta y filtro «Ligera» | Etiqueta textual en las alternativas ligeras y filtro combinable en Explorar. | N6 |
| HU-023 | Seleccionar una alternativa y confirmar | Acción «Elegir opción», confirmación explícita e historial local de la elección. | N3 |
| HU-024 | Dónde conseguir la alternativa | Lugar asociado visible en tarjetas, detalle y planificación. | N3, N4 |
| HU-025 | Ideas de preparaciones rápidas para llevar | Tres ideas con ingredientes, tiempo y costo aproximado; se pueden guardar en Favoritos. | N2 |
| HU-026 | Aviso de alcance de la orientación | Aviso visible en Inicio, Perfil y contenidos de aprendizaje. | N5 |
| HU-027 | Microcontenidos sobre fuentes de hierro | Sección educativa con explicaciones breves y ejemplos accesibles. | N5 |
| HU-028 | Etiqueta «Fuente de hierro» | Etiqueta textual en tarjetas y detalle; no depende solo del color. | N5 |
| HU-029 | Filtro «Fuente de hierro» | Filtro combinable con tiempo, presupuesto, lugar y momento. | N5 |
| HU-030 | Combinaciones alimentarias orientativas | Ejemplo de legumbres con tomate y limón, sin cantidades ni indicaciones terapéuticas. | N5 |
| HU-032 | Consultar la fuente de cada contenido | Enlaces junto a los microcontenidos a fuentes oficiales de MINSA y OMS. | N5 |
| HU-037 | Planificar la próxima comida | Formulario con alternativa, fecha y hora; aparece en Inicio y Planificar. | N1, N2 |
| HU-040 | Registrar cómo se sintió después de comer | Registro opcional de una pulsación con tres estados, disponible tras elegir o marcar como consumida. | N6 |
| HU-041 | Ver un resumen de cómo se sintió | Perfil muestra las últimas siete respuestas con icono y texto, y un estado vacío. | N6 |
| HU-045 | Consultar ingredientes y alérgenos | El detalle identifica ingredientes y alérgenos declarados e invita a confirmar datos con el local. | N3 |

## Funciones adicionales que no cuentan dentro de las 30

Favoritos (HU-035 y HU-036) se mantienen disponibles por coherencia con los mockups y User Flow, pero se consideran complementarios para el mínimo core. También hay una preferencia de alimentos que no se consumen (HU-005) en el Perfil; no se contabiliza porque no aparece como dolor explícito en las entrevistas entregadas.

## Fuentes oficiales en los contenidos

- [MINSA: Importancia del hierro](https://www.gob.pe/21579)
- [MINSA: Vitamina C y absorción del hierro](https://www.gob.pe/institucion/minsa/noticias/49439-vitamina-c-aumenta-la-absorcion-del-hierro-en-los-alimentos)
- [OMS: Anemia](https://www.who.int/news-room/fact-sheets/detail/anaemia)
- [MINSA: diagnóstico y tratamiento de anemia](https://www.gob.pe/23344-que-es-la-anemia-diagnostico-y-tratamiento)

## Alcance de la demo

Es una demo de front-end con HTML, CSS y JavaScript, sin dependencias de compilación. Preferencias, filtros, favoritos, planificación y registros se guardan localmente en el navegador. El acceso con correo solo demuestra el flujo y valida campos; no autentica cuentas ni envía credenciales. Precios, lugares, ingredientes y disponibilidad son referenciales. No se envían notificaciones reales. Las preparaciones de casa indican costos y tiempos aproximados.

La interfaz mantiene las cinco secciones en pantallas pequeñas y usa formularios etiquetados, etiquetas de texto, navegación por teclado y estilos de foco visibles. Los contenidos de salud son educativos; no diagnostican ni prescriben.
