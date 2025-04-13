import Alpine from "alpinejs";
import Main from "./counter";
window.Alpine = Alpine;
Alpine.data("Main", Main);
Alpine.start();
