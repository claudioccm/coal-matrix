import Vue from "vue"

Vue.filter('slugify', function(value) {
	value = value.toLowerCase();
    // faz as substituições dos acentos
    value = value.replace(/[á|ã|â|à]/gi, "a");
    value = value.replace(/[é|ê|è]/gi, "e");
    value = value.replace(/[í|ì|î]/gi, "i");
    value = value.replace(/[õ|ò|ó|ô]/gi, "o");
    value = value.replace(/[ú|ù|û]/gi, "u");
    value = value.replace(/[ç]/gi, "c");
    value = value.replace(/[ñ]/gi, "n");
    value = value.replace(/[á|ã|â]/gi, "a");
    // faz a substituição dos espaços e outros caracteres por - (hífen)
    value = value.replace(/\W/gi, "-");
    // remove - (hífen) duplicados
    value = value.replace(/(\-)\1+/gi, "-");
    return value;
});
