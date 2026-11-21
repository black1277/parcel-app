export const byId = (id) => document.getElementById(id);

export const qs = (selector, root = document) => root.querySelector(selector);

export const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
