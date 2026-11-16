const recipes = [
  {id:"bizcocho",name:"Bizcocho clásico",category:"Bizcochos",emoji:"🎂",time:"55 min aprox.",desc:"Una idea sencilla para acompañar el café o servir en una celebración.",intro:"Un bizcocho casero de miga suave. Esta receta de ejemplo es una base que puedes personalizar con vainilla, ralladura de limón o tu sabor favorito.",ingredients:["2 tazas de harina de trigo","1 taza de azúcar","3 huevos","½ taza de leche","½ taza de aceite suave o mantequilla derretida","2 cucharaditas de polvo de hornear","1 cucharadita de vainilla"],steps:["Precalienta el horno a 180 °C y engrasa un molde mediano.","Bate los huevos con el azúcar hasta que la mezcla esté más clara.","Añade el aceite, la leche y la vainilla. Mezcla suavemente.","Incorpora la harina previamente mezclada con el polvo de hornear, poco a poco.","Vierte en el molde y hornea aproximadamente 35–45 minutos, o hasta que al insertar un palillo salga limpio.","Deja reposar, desmolda y enfría antes de decorar."]},
  {id:"galletas",name:"Galletas con chispas",category:"Galletas",emoji:"🍪",time:"30 min aprox.",desc:"Galletitas doradas con trocitos de chocolate.",intro:"Una preparación popular para compartir. Puedes ajustar el tamaño y la cantidad de chispas de chocolate.",ingredients:["1½ tazas de harina de trigo","½ taza de mantequilla a temperatura ambiente","½ taza de azúcar","1 huevo","½ cucharadita de polvo de hornear","½ taza de chispas de chocolate","1 cucharadita de vainilla"],steps:["Precalienta el horno a 180 °C y prepara una bandeja con papel para hornear.","Bate la mantequilla con el azúcar hasta obtener una crema.","Agrega el huevo y la vainilla.","Incorpora la harina y el polvo de hornear. Añade las chispas de chocolate.","Forma bolitas, colócalas separadas en la bandeja y aplástalas ligeramente.","Hornea de 10 a 14 minutos, hasta que los bordes estén ligeramente dorados. Deja enfriar antes de moverlas."]},
  {id:"flan",name:"Flan de caramelo",category:"Postres",emoji:"🍮",time:"1 h + enfriado",desc:"Un postre cremoso con una capa de caramelo.",intro:"Un clásico de textura suave y sabor delicado. Necesita enfriarse bien para desmoldarlo con más facilidad.",ingredients:["½ taza de azúcar para el caramelo","1 lata de leche condensada","1 medida de leche (usa la lata vacía)","4 huevos","1 cucharadita de vainilla"],steps:["Derrite el azúcar en una sartén a fuego bajo hasta obtener un caramelo dorado. Vierte con cuidado en el molde.","Licúa o bate la leche condensada, la leche, los huevos y la vainilla hasta integrar.","Vierte la mezcla en el molde caramelizado.","Coloca el molde dentro de una bandeja con agua caliente para cocinar a baño María.","Hornea a 160–170 °C durante aproximadamente 50–60 minutos, o hasta que esté cuajado.","Deja enfriar y refrigera varias horas antes de desmoldar."]},
  {id:"mousse",name:"Mousse de chocolate",category:"Postres",emoji:"🍫",time:"20 min + frío",desc:"Una opción cremosa para servir bien fría.",intro:"Un postre de chocolate para preparar con anticipación. Manténlo refrigerado hasta el momento de servir.",ingredients:["200 g de chocolate semiamargo","250 ml de crema para batir bien fría","2 cucharadas de azúcar (opcional)"],steps:["Derrite el chocolate a baño María o en intervalos cortos en el microondas.","Deja que el chocolate pierda un poco de calor, sin permitir que se endurezca.","Bate la crema fría hasta que forme picos suaves. Añade azúcar si lo deseas.","Incorpora una parte de la crema al chocolate y luego agrega el resto con movimientos envolventes.","Reparte en vasitos y refrigera al menos 3 horas antes de servir."]},
  {id:"cupcakes",name:"Cupcakes de vainilla",category:"Bizcochos",emoji:"🧁",time:"35 min aprox.",desc:"Pequeños bizcochitos perfectos para decorar.",intro:"Una base sencilla para practicar decoraciones con crema, sprinkles o frutas.",ingredients:["1½ tazas de harina","¾ taza de azúcar","2 huevos","½ taza de leche","⅓ taza de aceite","1½ cucharaditas de polvo de hornear","1 cucharadita de vainilla"],steps:["Precalienta el horno a 180 °C y coloca capacillos en un molde para cupcakes.","Mezcla los huevos y el azúcar.","Agrega la leche, el aceite y la vainilla.","Incorpora la harina y el polvo de hornear sin batir de más.","Llena cada capacillo hasta dos tercios de su capacidad.","Hornea de 18 a 22 minutos. Enfría completamente antes de decorar."]},
  {id:"arroz",name:"Arroz con leche",category:"Postres",emoji:"🥣",time:"45 min aprox.",desc:"Un postre tradicional, suave y aromático.",intro:"Una preparación casera que puedes aromatizar con canela y un toque de limón.",ingredients:["½ taza de arroz","3 tazas de agua","2 tazas de leche","½ taza de azúcar (ajusta al gusto)","1 rama de canela","Cáscara de limón (opcional)"],steps:["Lava el arroz y colócalo en una olla con el agua y la canela.","Cocina a fuego medio-bajo hasta que el arroz esté tierno y haya absorbido buena parte del agua.","Añade la leche y el azúcar. Cocina removiendo con frecuencia.","Agrega la cáscara de limón si la utilizas y continúa cocinando hasta lograr una consistencia cremosa.","Retira la canela y la cáscara. Sirve tibio o deja enfriar y refrigera."]}
];

const pageNames = ["inicio","recetas","consejos","calendario","sobre-mi"];
function recipeCard(r){return `<article class="recipe-card"><div class="recipe-art" aria-hidden="true">${r.emoji}</div><div class="recipe-info"><span class="tag">${r.category}</span><h3>${r.name}</h3><p>${r.desc}</p><button class="recipe-open" data-recipe="${r.id}">Ver receta →</button></div></article>`;}
function renderRecipes(){
  document.getElementById("homeRecipes").innerHTML=recipes.slice(0,3).map(recipeCard).join("");
  filterRecipes();
}
let activeFilter="Todas";
function filterRecipes(){
  const q=(document.getElementById("recipeSearch")?.value||"").toLowerCase().trim();
  const shown=recipes.filter(r=>(activeFilter==="Todas"||r.category===activeFilter)&&(`${r.name} ${r.category} ${r.desc}`.toLowerCase().includes(q)));
  document.getElementById("allRecipes").innerHTML=shown.map(recipeCard).join("");
  document.getElementById("emptyState").hidden=shown.length!==0;
}
function openRecipe(id){
  const r=recipes.find(x=>x.id===id); if(!r)return;
  document.getElementById("modalContent").innerHTML=`<span class="tag">${r.category}</span><h2 id="modalTitle">${r.emoji} ${r.name}</h2><p class="modal-meta">⏱ ${r.time}</p><p>${r.intro}</p><h3>Ingredientes</h3><ul>${r.ingredients.map(x=>`<li>${x}</li>`).join("")}</ul><h3>Preparación</h3><ol>${r.steps.map(x=>`<li>${x}</li>`).join("")}</ol><p class="small-note">Consejo: lee todos los pasos antes de comenzar y adapta los tiempos a tu horno y utensilios.</p>`;
  const modal=document.getElementById("recipeModal");modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){const m=document.getElementById("recipeModal");m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow="";}
function route(){
  let page=location.hash.replace("#","")||"inicio";if(!pageNames.includes(page))page="inicio";
  pageNames.forEach(p=>{const el=document.getElementById("page-"+p);if(el)el.hidden=p!==page;});
  document.querySelectorAll(".nav a").forEach(a=>{if(a.dataset.page===page)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});
  document.title=(page==="inicio"?"Dulce Hogar":page.replace("-"," ").replace(/\b\w/g,c=>c.toUpperCase())+" | Dulce Hogar");
  document.getElementById("mainNav").classList.remove("open");document.getElementById("menuToggle").setAttribute("aria-expanded","false");
  window.scrollTo(0,0);
}
document.addEventListener("click",e=>{
  const btn=e.target.closest("[data-recipe]");if(btn)openRecipe(btn.dataset.recipe);
  if(e.target.matches("[data-close]")||e.target.id==="modalClose")closeModal();
  const filter=e.target.closest("[data-filter]");if(filter){activeFilter=filter.dataset.filter;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===filter));filterRecipes();}
});
document.getElementById("recipeSearch").addEventListener("input",filterRecipes);
document.getElementById("menuToggle").addEventListener("click",()=>{const n=document.getElementById("mainNav");n.classList.toggle("open");document.getElementById("menuToggle").setAttribute("aria-expanded",n.classList.contains("open")?"true":"false");});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
window.addEventListener("hashchange",route);
document.getElementById("year").textContent=new Date().getFullYear();
renderRecipes();route();
