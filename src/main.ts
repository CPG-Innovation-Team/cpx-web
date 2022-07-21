import { createApp } from 'vue';
import { Layout, Menu, Button, Input } from 'ant-design-vue';
import router from './router';
import App from './App';

import 'ant-design-vue/dist/antd.less';

const app = createApp(App);
app.use(router);
app.use(Layout);
app.use(Menu);
app.use(Button);
app.use(Input);
app.mount('#app');
