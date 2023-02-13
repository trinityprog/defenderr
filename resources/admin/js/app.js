import $ from "jquery";
import Alpine from 'alpinejs';
import axios from 'axios';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import 'inputmask'

window.Alpine = Alpine;
window.$ = $;
window.jQuery = $;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Alpine.start()

$(document).ready(() => {
    if($('textarea[ckeditor]').length) {
        document.querySelectorAll('textarea[ckeditor]')
            .forEach(el =>
                ClassicEditor
                    .create(el)
                    .catch(error => {
                        console.error(error);
                    })
            )
    }
    document.querySelectorAll('[type=file]')
        .forEach(el =>
            el.addEventListener('change', () => {
                el.previousElementSibling.innerText = `Выбран ${el.files[0].name.substring(0,10)}`
            })
        )
})
