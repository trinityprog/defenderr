import _ from 'lodash';
import axios from 'axios';
import 'lazysizes';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
import i18n from "./i18n";

const {locale} = i18n.global

window._ = _;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Locale'] = locale.value;
