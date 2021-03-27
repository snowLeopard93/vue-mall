import Vue from "vue";
import Vuex from "vuex";

import system from "./modules/system";

// system
import user from "./modules/user";
import role from "./modules/role";
import notice from "./modules/notice";
import log from "./modules/log";

// orderManage
import order from "./modules/order";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    system: system,
    user: user,
    role: role,
    notice: notice,
    log: log,
    order: order
  }
});
