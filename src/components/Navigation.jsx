import React from "react";
---
const pathname = new URL(Astro.request.url).pathname;
const currentPath = pathname.slice(1); // remove the first "/"
---

<nav>
  <a class={currentPath === "" ? "active" : ""} href="/">Home</a>
  <a class={currentPath === "portfolio" ? "active" : ""} href="/portfolio">Portfolio</a>
  <a class={currentPath === "posts" ? "active" : ""} href="/posts">Article</a>
  <a class={currentPath === "about" ? "active" : ""} href="/about">About Me</a>
  <a class={currentPath === "contact" ? "active" : ""} href="/contact">Contact Me</a>
</nav>

