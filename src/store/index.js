import Vue from "vue";
import Vuex from "vuex";

import system from "./modules/system";
import user from "./modules/user";
import role from "./modules/role";
import notice from "./modules/notice";
import log from "./modules/log";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    system: system,
    user: user,
    role: role,
    notice: notice,
    log: log
  }
});
