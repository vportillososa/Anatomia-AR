const BASE="https://raw.githubusercontent.com/hubmapconsortium/ccf-releases/main/v1.2/models/";
const anatomy=[
{id:"heart",name:"Corazón",system:"Cardiovascular",icon:"🫀",model:BASE+"VH_M_Heart.glb",summary:"Órgano muscular situado en el mediastino que impulsa la sangre a través de la circulación pulmonar y sistémica.",function:"Genera la presión necesaria para mantener el flujo sanguíneo y permite la distribución de oxígeno y nutrientes.",parts:["Aurícula derecha","Aurícula izquierda","Ventrículo derecho","Ventrículo izquierdo","Aorta","Tronco pulmonar","Válvulas cardíacas"]},
{id:"vessels",name:"Vasculatura sanguínea",system:"Cardiovascular",icon:"🩸",model:BASE+"VH_M_Blood_Vasculature.glb",summary:"Red de vasos que comunica el corazón con los tejidos.",function:"Transporta sangre, gases, nutrientes, hormonas y productos del metabolismo.",parts:["Arterias","Arteriolas","Capilares","Vénulas","Venas"]},
{id:"lungs",name:"Pulmones",system:"Respiratorio",icon:"🫁",model:BASE+"VH_M_Lung.glb",summary:"Órganos pares de la cavidad torácica responsables del intercambio gaseoso.",function:"Permiten incorporar oxígeno y eliminar dióxido de carbono mediante la ventilación y el intercambio alveolar.",parts:["Pulmón derecho","Pulmón izquierdo","Lóbulos","Bronquios intrapulmonares","Alvéolos"]},
{id:"liver",name:"Hígado",system:"Digestivo",icon:"◒",model:BASE+"VH_M_Liver.glb",summary:"Gran órgano glandular situado principalmente en el cuadrante superior derecho del abdomen.",function:"Participa en metabolismo, almacenamiento, detoxificación y producción de bilis.",parts:["Lóbulo derecho","Lóbulo izquierdo","Vasos hepáticos","Vías biliares"]},
{id:"smallint",name:"Intestino delgado",system:"Digestivo",icon:"〰️",model:BASE+"VH_M_Small_Intestine.glb",summary:"Segmento del tubo digestivo situado entre el estómago y el intestino grueso.",function:"Es el principal sitio de digestión química y absorción de nutrientes.",parts:["Duodeno","Yeyuno","Íleon"]},
{id:"kidneyl",name:"Riñón izquierdo",system:"Urinario",icon:"🫘",model:BASE+"VH_M_Kidney_L.glb",summary:"Órgano retroperitoneal del sistema urinario.",function:"Filtra la sangre, participa en el equilibrio hidroelectrolítico y contribuye a la formación de orina.",parts:["Corteza renal","Médula renal","Pirámides renales","Pelvis renal","Hilio renal"]},
{id:"kidneyr",name:"Riñón derecho",system:"Urinario",icon:"🫘",model:BASE+"VH_M_Kidney_R.glb",summary:"Órgano retroperitoneal del sistema urinario, situado normalmente algo más bajo que el izquierdo.",function:"Filtra la sangre y participa en la regulación del volumen, electrolitos y equilibrio ácido-base.",parts:["Corteza renal","Médula renal","Pirámides renales","Pelvis renal","Hilio renal"]},
{id:"skin",name:"Cuerpo / piel",system:"Tegumentario",icon:"🧍",model:BASE+"VH_M_Skin.glb",summary:"La piel forma la cubierta externa del organismo y constituye una barrera con el medio.",function:"Protección, sensibilidad, termorregulación y participación en la homeostasis.",parts:["Epidermis","Dermis","Hipodermis","Anexos cutáneos"]},
{id:"brain",name:"Cerebro",system:"Nervioso",icon:"🧠",model:null,summary:"Parte principal del encéfalo, alojada dentro del cráneo.",function:"Integra información sensorial y participa en cognición, movimiento, lenguaje, memoria y regulación de múltiples funciones.",parts:["Lóbulo frontal","Lóbulo parietal","Lóbulo temporal","Lóbulo occipital","Hemisferios cerebrales"]},
{id:"skeleton",name:"Esqueleto",system:"Óseo",icon:"🦴",model:null,summary:"Armazón interno formado por huesos y estructuras asociadas.",function:"Da soporte, protege órganos, permite el movimiento junto con los músculos y participa en hematopoyesis y reserva mineral.",parts:["Cráneo","Columna vertebral","Caja torácica","Cintura escapular","Pelvis","Miembros superiores","Miembros inferiores"]},
{id:"muscles",name:"Sistema muscular",system:"Muscular",icon:"💪",model:null,summary:"Conjunto de músculos esqueléticos responsables de gran parte del movimiento voluntario.",function:"Produce movimiento, mantiene la postura y contribuye a la generación de calor.",parts:["Deltoides","Pectoral mayor","Bíceps braquial","Recto abdominal","Glúteo mayor","Cuádriceps","Gastrocnemio"]},
{id:"stomach",name:"Estómago",system:"Digestivo",icon:"◡",model:null,summary:"Órgano hueco situado entre el esófago y el duodeno.",function:"Almacena temporalmente alimento, lo mezcla y participa en la digestión mecánica y química.",parts:["Cardias","Fundus","Cuerpo","Antro","Píloro"]},
{id:"bladder",name:"Vejiga urinaria",system:"Urinario",icon:"💧",model:null,summary:"Órgano muscular hueco situado en la pelvis.",function:"Almacena temporalmente la orina antes de la micción.",parts:["Ápice","Cuerpo","Fondo","Cuello","Trígono vesical"]},
{id:"trachea",name:"Tráquea y vías aéreas",system:"Respiratorio",icon:"↟",model:null,summary:"Conductos que comunican la vía aérea superior con los pulmones.",function:"Conducen, acondicionan y distribuyen el aire hacia el árbol bronquial.",parts:["Laringe","Tráquea","Bronquio principal derecho","Bronquio principal izquierdo"]},
{id:"spinal",name:"Médula espinal",system:"Nervioso",icon:"↕",model:null,summary:"Estructura del sistema nervioso central alojada en el canal vertebral.",function:"Conduce información entre encéfalo y cuerpo y participa en circuitos reflejos.",parts:["Región cervical","Torácica","Lumbar","Sacra","Raíces nerviosas"]}
];

const questions=[
["¿Qué cavidad cardíaca impulsa sangre hacia la circulación sistémica?","Ventrículo izquierdo",["Aurícula derecha","Ventrículo izquierdo","Ventrículo derecho","Aurícula izquierda"]],
["¿Dónde ocurre principalmente el intercambio gaseoso pulmonar?","Alvéolos",["Pleura","Alvéolos","Tráquea","Diafragma"]],
["¿Cuál es la principal función del intestino delgado?","Digestión y absorción de nutrientes",["Almacenar orina","Bombear sangre","Digestión y absorción de nutrientes","Control motor"]],
["¿Qué órgano filtra la sangre y participa en la formación de orina?","Riñón",["Hígado","Riñón","Pulmón","Estómago"]],
["¿Qué sistema protege y da soporte estructural al cuerpo?","Sistema óseo",["Sistema óseo","Sistema endocrino","Sistema respiratorio","Sistema digestivo"]],
["¿Qué órgano produce bilis?","Hígado",["Corazón","Hígado","Vejiga","Pulmón"]],
["¿Qué estructura almacena temporalmente la orina?","Vejiga urinaria",["Estómago","Vejiga urinaria","Aorta","Tráquea"]],
["¿Qué estructura conecta funcionalmente el encéfalo con gran parte del cuerpo?","Médula espinal",["Píloro","Médula espinal","Aorta","Bronquio"]],
["¿Qué sistema permite principalmente el movimiento voluntario junto con el esqueleto?","Sistema muscular",["Sistema urinario","Sistema muscular","Sistema tegumentario","Sistema linfático"]],
["¿Cuántos ventrículos tiene el corazón humano?","Dos",["Uno","Dos","Tres","Cuatro"]]
];

const cards=document.querySelector("#cards"),filters=document.querySelector("#filters"),viewer=document.querySelector("#viewer"),fallback=document.querySelector("#fallback"),title=document.querySelector("#organTitle"),tag=document.querySelector("#systemTag"),info=document.querySelector("#infoPanel");
let selected=anatomy[0],tab="resumen",filter="Todos";

const systems=["Todos",...new Set(anatomy.map(x=>x.system))];
systems.forEach(s=>{const b=document.createElement("button");b.textContent=s;b.className=s==="Todos"?"active":"";b.onclick=()=>{filter=s;[...filters.children].forEach(x=>x.classList.toggle("active",x===b));renderCards()};filters.appendChild(b)});

function fallbackSVG(item){return `<div style="text-align:center"><svg viewBox="0 0 260 320" aria-label="${item.name}"><circle cx="130" cy="58" r="38" fill="#dceaf3"/><path d="M88 105Q130 82 172 105l23 120q-10 55-32 78h-66q-22-23-32-78z" fill="#dceaf3"/><circle cx="130" cy="166" r="42" fill="#a83d4b" opacity=".85"/><text x="130" y="285" text-anchor="middle" font-size="16" font-family="sans-serif" fill="#123b5d">${item.name}</text></svg><p style="color:#667481;max-width:420px">Ficha educativa disponible. Este módulo no incluye todavía un modelo 3D específico en el paquete.</p></div>`}
function renderCards(){cards.innerHTML="";anatomy.filter(x=>filter==="Todos"||x.system===filter).forEach(item=>{const b=document.createElement("button");b.className="organ-card"+(selected.id===item.id?" active":"");b.innerHTML=`<span class="organ-icon">${item.icon}</span><span><b>${item.name}</b><small>${item.system}${item.model?" · 3D/AR":" · ficha"}</small></span>`;b.onclick=()=>select(item);cards.appendChild(b)})}
function select(item){selected=item;title.textContent=item.name;tag.textContent=item.system;if(item.model){fallback.hidden=true;viewer.hidden=false;viewer.src=item.model}else{viewer.removeAttribute("src");viewer.hidden=true;fallback.hidden=false;fallback.innerHTML=fallbackSVG(item)}renderCards();renderInfo()}
function renderInfo(){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));if(tab==="resumen")info.innerHTML=`<h3>${selected.name}</h3><p>${selected.summary}</p>`;if(tab==="funcion")info.innerHTML=`<h3>Función principal</h3><p>${selected.function}</p>`;if(tab==="partes")info.innerHTML=`<h3>Estructuras principales</h3><div class="parts">${selected.parts.map(p=>`<span class="part">${p}</span>`).join("")}</div>`}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{tab=b.dataset.tab;renderInfo()});
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>document.getElementById(b.dataset.go).scrollIntoView());
document.querySelector("#arHelp").onclick=()=>document.querySelector("#helpDialog").showModal();
viewer.addEventListener("error",()=>{viewer.hidden=true;fallback.hidden=false;fallback.innerHTML=fallbackSVG(selected)});
select(selected);

let qi=0,score=0,answered=false;
function quiz(){answered=false;document.querySelector("#next").disabled=true;document.querySelector("#feedback").textContent="";document.querySelector("#progress").textContent=`Pregunta ${qi+1}/${questions.length}`;document.querySelector("#score").textContent=`${score} puntos`;const [q,a,opts]=questions[qi];document.querySelector("#question").textContent=q;const box=document.querySelector("#answers");box.innerHTML="";opts.forEach(o=>{const b=document.createElement("button");b.className="answer";b.textContent=o;b.onclick=()=>{if(answered)return;answered=true;[...box.children].forEach(x=>{if(x.textContent===a)x.classList.add("correct")});if(o===a){score++;document.querySelector("#feedback").textContent="✓ Correcto"}else{b.classList.add("wrong");document.querySelector("#feedback").textContent=`Respuesta correcta: ${a}`};document.querySelector("#score").textContent=`${score} puntos`;document.querySelector("#next").disabled=false};box.appendChild(b)})}
document.querySelector("#next").onclick=()=>{qi=(qi+1)%questions.length;if(qi===0)score=0;quiz()};quiz();

let deferredPrompt;const installBtn=document.querySelector("#installBtn");
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false});
installBtn.onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true};
// ======================================================
// LANZADOR DE REALIDAD AUMENTADA
// ======================================================

const arButton = document.querySelector("#arButton");

function showARMessage(message) {
  alert(message);
}

async function launchAR() {

  // Comprobar que la estructura seleccionada tenga modelo 3D
  if (!selected || !selected.model) {
    showARMessage(
      "Esta estructura todavía no dispone de un modelo 3D para realidad aumentada."
    );
    return;
  }

  const modelURL = selected.model;

  const isAndroid = /Android/i.test(navigator.userAgent);

  // --------------------------------------------------
  // ANDROID: abrir Google Scene Viewer directamente
  // --------------------------------------------------
  if (isAndroid) {

    const file = encodeURIComponent(modelURL);

    const titleAR = encodeURIComponent(selected.name);

    const fallback = encodeURIComponent(
      window.location.href
    );

    const sceneViewerIntent =
      "intent://arvr.google.com/scene-viewer/1.0" +
      "?file=" + file +
      "&mode=ar_only" +
      "&title=" + titleAR +
      "#Intent;" +
      "scheme=https;" +
      "package=com.google.ar.core;" +
      "action=android.intent.action.VIEW;" +
      "S.browser_fallback_url=" + fallback + ";" +
      "end;";

    window.location.href = sceneViewerIntent;

    return;
  }

  // --------------------------------------------------
  // OTROS DISPOSITIVOS
  // --------------------------------------------------

  try {

    if (viewer && typeof viewer.activateAR === "function") {

      await viewer.activateAR();

    } else {

      showARMessage(
        "La realidad aumentada no está disponible en este navegador."
      );

    }

  } catch (error) {

    console.error("Error al iniciar AR:", error);

    showARMessage(
      "No se pudo iniciar la realidad aumentada en este dispositivo."
    );

  }
}

if (arButton) {

  arButton.addEventListener("click", launchAR);

}
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));
