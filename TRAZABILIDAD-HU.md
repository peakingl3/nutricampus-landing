# NutriCampus — trazabilidad de 30 HU core

La necesidad principal: encontrar una alternativa alimentaria viable dentro del tiempo, presupuesto y contexto del estudiante; evaluar la información con confianza; elegirla; y aprender de la experiencia.

La Arquitectura Web organiza la experiencia en **Inicio, Explorar, Planificar, Favoritos y Perfil**. Los User Flows A–F respaldan el acceso/configuración, la búsqueda y elección, favoritos, planificación, contenidos de hierro y registro de sensaciones. La página implementa esas áreas como una sola experiencia responsive.

## Historias seleccionadas y evidencia en la página

| HU | Historia | Evidencia funcional |
|---|---|---|
| HU-001 | Ingreso rápido a la aplicación | Acceso como invitado de una acción y formulario de correo/contraseña de demostración. |
| HU-002 | Configuración mínima inicial | Asistente de tres pasos: tiempo, presupuesto y lugar; guarda preferencias en el dispositivo. |
| HU-003 | Omitir la configuración inicial | Acción visible «Omitir» y acceso como invitado; se puede completar después. |
| HU-005 | Indicar alimentos que no consumo | Preferencias del perfil con restricciones alimentarias que excluyen opciones de resultados. |
| HU-007 | Recomendación principal «qué puedo comer ahora» | Recomendación en Inicio, ajustada a preferencias, con acceso directo al detalle. |
| HU-008 | Filtro por tiempo disponible | Filtro de 5, 10 o 15 minutos; resultados se actualizan en el mismo panel. |
| HU-009 | Filtro por presupuesto | Máximo de S/ 5, S/ 10 o S/ 15 y precios en tarjetas. |
| HU-010 | Filtro por lugar y disponibilidad | Filtro por cafetería, comedor, máquina o local cercano; el lugar se indica en cada opción. |
| HU-011 | Combinar y limpiar filtros | Filtros acumulables, etiquetas activas y acción para restablecerlos. |
| HU-013 | Mensaje cuando no hay resultados | Mensaje con sugerencias y botón «Limpiar filtros». |
| HU-014 | Búsqueda por nombre | Búsqueda inmediata por nombre, ingrediente, lugar o etiqueta. |
| HU-016 | Tarjeta con tiempo, precio y etiqueta | Tarjetas con precio, minutos, lugar y etiqueta «Fuente de hierro» cuando corresponde. |
| HU-017 | Detalle de una alternativa | Diálogo con descripción, datos, ingredientes, alérgenos y alternativas. |
| HU-018 | Información nutricional bajo demanda | Sección desplegable en el detalle, con texto orientativo y fuentes cuando aplica. |
| HU-019 | Sustituciones rápidas de snacks | Sugerencias de reemplazo en el detalle y en las opciones rápidas de Inicio. |
| HU-020 | Sustituciones de bebidas azucaradas o energéticas | Acceso a ideas rápidas; el contenido remite a combinaciones cotidianas y evita prescribir. |
| HU-023 | Seleccionar una alternativa y confirmar | Acción «Elegir opción», mensaje de confirmación e historial local de la elección. |
| HU-024 | Dónde conseguir la alternativa | Lugar asociado visible en tarjetas, detalle y planificación. |
| HU-026 | Aviso de alcance de la orientación | Aviso visible en Inicio, Perfil y contenidos de aprendizaje. |
| HU-027 | Microcontenidos sobre fuentes de hierro | Sección «Aprende sobre el hierro» con explicaciones breves. |
| HU-028 | Etiqueta «Fuente de hierro» | Etiqueta textual en tarjetas y detalle, no depende solo del color. |
| HU-029 | Filtro «Fuente de hierro» | Filtro combinable con tiempo, presupuesto y lugar. |
| HU-030 | Combinaciones alimentarias orientativas | Ejemplo de lentejas con tomate y limón, sin cantidades ni indicaciones terapéuticas. |
| HU-032 | Consultar la fuente de cada contenido | Enlaces junto a cada microcontenido a MINSA u OMS. |
| HU-035 | Guardar alternativas favoritas | Control en cada tarjeta y en el detalle; el estado se guarda localmente. |
| HU-036 | Ver y gestionar favoritas | Sección en navegación principal con tarjetas y estado vacío. |
| HU-037 | Planificar la próxima comida | Formulario con alternativa, fecha y hora; aparece en Inicio y Planificar. |
| HU-040 | Registrar cómo se sintió después de comer | Registro opcional de una pulsación con tres estados; el Inicio ofrece la pregunta después de elegir. |
| HU-041 | Ver un resumen de cómo se sintió | Perfil muestra las últimas siete respuestas con icono y texto, y un estado vacío. |
| HU-045 | Consultar ingredientes y alérgenos | El detalle identifica ingredientes y alérgenos declarados; invita a confirmar datos con el local. |

## Fuentes incluidas en los contenidos

- [MINSA: Importancia del hierro](https://www.gob.pe/21579)
- [MINSA: Vitamina C y absorción del hierro](https://www.gob.pe/institucion/minsa/noticias/49439-vitamina-c-aumenta-la-absorcion-del-hierro-en-los-alimentos)
- [OMS: Anemia](https://www.who.int/news-room/fact-sheets/detail/anaemia)
- [MINSA: diagnóstico y tratamiento de anemia](https://www.gob.pe/23344-que-es-la-anemia-diagnostico-y-tratamiento)

## Alcance de esta entrega

Es una demo funcional de front-end hecha con HTML, CSS y JavaScript, sin dependencias de compilación. Preferencias, favoritos, planificación y registros se guardan en el almacenamiento local del navegador. El acceso con correo solo demuestra el flujo y valida campos; no autentica cuentas ni envía credenciales. Precios, lugares, ingredientes y disponibilidad son datos referenciales de la demo. No se envían notificaciones reales.

La interfaz conserva las cinco secciones en pantallas pequeñas, combina filtros en la vista Explorar y usa controles de formulario etiquetados, estados textuales, navegación por teclado y estilos de foco visibles. Los textos de orientación son educativos y no diagnostican ni prescriben.
