
// objeto con las propiedades del efecto Lightbox
var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    // con esto creamos un elemento que seleccione el body de nuestro HTML, al renotar un arreglo agregamos la posicion inicial
    cuerpoDom: document.getElementsByTagName('body')[0],
    modal: null
}

// objeto con las Metodos del efecto Lightbox
// hemos creado un buqule de tiempo que mientras propLightbox.imgContainer.length se menor incrementar en 1
var metLightbox = {
    inicio: function(){
        for (var i = 0; i < propLightbox.imgContainer.length; i++){
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },

    // en este metodo capturamos el elemento seleccionado después del click
    capturaImagen: function(){

        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    },

    //con window.getComputedStyle traemos el url de la imagen y con backgroundImage.slice removemos las comillas del url
    lightbox: function(imagen){
        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);
        //Aqui hemos creado un elemento que va a crear un DIV cada vez que hagmos click en el body 
        //a la misma vez agregara ID al DIV para que podamos seleccionarlo.
        propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
        //con esto seleccionamos el DIV que se creo apartir de dar click en el body 
        propLightbox.lightbox_container = document.getElementById('lightbox_container');
        //estulos del DIV que se crea apartir de dar click en el body
        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '100%';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top = '0';
        propLightbox.lightbox_container.style.left = '0';

        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');
        propLightbox.modal.style.height = '100%';

        propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);

        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal')
    }
}



metLightbox.inicio();