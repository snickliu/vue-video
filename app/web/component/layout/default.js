import Vue from 'vue';
import MainLayout from './main.vue';
import '../../asset/css/global.css';
import createLayout from './layout';
const tpl = '<div id="app"><slot></slot></div>';
export default createLayout('Layout', { }, tpl);