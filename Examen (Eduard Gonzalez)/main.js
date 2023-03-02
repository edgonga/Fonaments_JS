import { p1 } from "./repository.js";
document.getElementById("p1").addEventListener("click", () => p1(200))

import { mascotas } from "./dades.js";

import { p2b } from "./p2b.js";
document.getElementById("p2b").addEventListener("click", () => p2b(mascotas))

import { p2c } from "./p2c.js";
document.getElementById("p2c").addEventListener("click", () => p2c(mascotas))

const puppyList = []

import { crearPuppy } from "./crearPuppy.js";
document.getElementById("p2e").addEventListener("click", () => crearPuppy(puppyList))


