
// objeto con las propiedades del efecto Lightbox
var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox')
    imagen: null
}

// objeto con las Metodos del efecto Lightbox
var metLightbox = {
    inicio: function(){
        for (var i = 0; i < propLightbox.imgContainer.length; i++){
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },

    capturaImagen: function(){

        propLightbox.imagen = this;
        metLightbox.metLightbox(propLightbox,imagen);
    }
}

metLightbox.inicio();