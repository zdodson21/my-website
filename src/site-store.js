// import { autorun } from "mobx";

/**
 * @author Zach Dodson
 * @description State management store for all components
 */
class SiteStore {
  constructor() {
    // theme options = ['95', 'xp']
    this.theme = '95';

    // 95 Icons
    this.blankWindowIcon95 = new URL(
      '../assets/icons/95/blank-window.png',
      import.meta.url,
    ).href;
    this.folderClosedIcon95 = new URL(
      '../assets/icons/95/folder-closed.png',
      import.meta.url,
    ).href;
    this.folderOpenIcon95 = new URL(
      '../assets/icons/95/folder-open.png',
      import.meta.url,
    ).href;
    this.myComputerIcon95 = new URL(
      '../assets/icons/95/my-computer.png',
      import.meta.url,
    ).href;
    this.recycleBinIcon95 = new URL(
      '../assets/icons/95/recycle-bin.png',
      import.meta.url,
    ).href;
    this.startIcon95 = new URL(
      '../assets/icons/95/start.png',
      import.meta.url,
    ).href;

    // XP Icons
    this.myComputerIconXP = new URL(
      '../assets/icons/xp/my-computer.png',
      import.meta.url,
    ).href;
  }
}

export const Store = new SiteStore();
