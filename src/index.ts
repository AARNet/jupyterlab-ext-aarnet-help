import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  IMainMenu
} from '@jupyterlab/mainmenu';

import '../style/index.css';

namespace CommandIDs {
  export const help = 'aarnet:help';
}


/**
 * Initialization data for the jupyterlab-ext-aarnet-help extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-ext-aarnet-help',
  autoStart: true,
  requires: [
    ICommandPalette,
    IMainMenu
  ],
  activate: (app: JupyterLab, palette: ICommandPalette, mainMenu: IMainMenu) => {
    app.commands.addCommand(CommandIDs.help, {
      label: 'CloudStor SWAN Support',
      execute: () => {
        window.open('https://support.aarnet.edu.au/hc/en-us/sections/360000129695-CloudStor-SWAN','_blank');
      }
    });
    mainMenu.helpMenu.addGroup([{ command: CommandIDs.help }], 20);
  }
};

export default extension;
