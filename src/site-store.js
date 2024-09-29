// import { autorun } from "mobx";

import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

inject();
injectSpeedInsights();

/**
 * @author Zach Dodson
 * @description State management store for all components
 */
class SiteStore {
  constructor() {
    // theme options = ['95', 'xp']
    this.theme = '95';

    // TODO new URL for all assets
  }
}

export const Store = new SiteStore();
