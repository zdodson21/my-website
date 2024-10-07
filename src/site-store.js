// import { autorun } from "mobx";

/**
 * @author Zach Dodson
 * @description State management store for all components
 */
class SiteStore {
  constructor() {
    // theme options = ['95', 'xp']
    this.theme = '95';
  }
}

export const Store = new SiteStore();
