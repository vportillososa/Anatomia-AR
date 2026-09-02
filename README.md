# Anatomía AR 2.0

Aplicación educativa WebAR/PWA lista para publicar.

## Qué incluye
- 15 estructuras anatómicas organizadas por sistemas.
- Modelos 3D/AR configurados para corazón, vasculatura, pulmones, hígado, riñones, intestino delgado y piel/cuerpo mediante Human Reference Atlas / HuBMAP.
- Fichas educativas para cerebro, esqueleto, sistema muscular, estómago, vejiga, vías aéreas y médula espinal.
- Filtros por sistema.
- Pestañas Resumen / Partes / Función.
- Cuestionario de 10 preguntas.
- PWA instalable.
- Service worker para la interfaz.
- Pantalla de créditos y licencia.

## Importante sobre los modelos
Los modelos HRA se cargan desde el repositorio oficial para no duplicar archivos grandes dentro del ZIP.
La biblioteca HRA/CCF está publicada bajo CC BY 4.0. Mantén la sección Créditos.

## Probar en una computadora
En esta carpeta ejecuta:
python -m http.server 8000

Abre:
http://localhost:8000

## Instalar en Android/iPhone
Para que aparezca la instalación y para usar WebAR correctamente, publica la carpeta mediante HTTPS.
Opciones: GitHub Pages, Netlify, Vercel u otro hosting HTTPS.

Android/Chrome: abre la web y usa "Instalar" / "Añadir a pantalla principal".
iPhone/Safari: Compartir > Añadir a pantalla de inicio. El soporte AR depende del dispositivo/navegador.

## Publicar en GitHub Pages
1. Crea un repositorio.
2. Sube todo el contenido de esta carpeta.
3. Settings > Pages.
4. Selecciona Deploy from a branch y main/root.
5. Abre la URL HTTPS generada.

## Fuente 3D
Human Reference Atlas / HuBMAP CCF 3D Reference Object Library.
Browne K., Cross L.E., Herr II B.W., Record E.G., Quardokus E.M., Bueckle A., Börner K.
Licencia: CC BY 4.0.

## Nota
Es una herramienta educativa y no sustituye material clínico validado ni asesoramiento médico.
