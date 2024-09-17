/**
 * @author Zach Dodson
 * @description State management store for all components
 */
class SiteStore {
  constructor() {
    this.theme = '95';
  }
}

export const siteStore = new SiteStore();