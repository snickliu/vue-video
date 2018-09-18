'use strict';

import {
  SET_ARTICLE_DETAIL,
  SET_ARTICLE_LIST,
} from './mutation-type';

const mutations = {
  [SET_ARTICLE_LIST](state, items) {
    state.articleList = items;
  },
  [SET_ARTICLE_DETAIL](state, data) {
    state.article = data;
  },
};
export default mutations;
