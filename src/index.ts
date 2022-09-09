import {
  ICommandPalette
} from '@jupyterlab/apputils';

import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IMainMenu
} from '@jupyterlab/mainmenu';

import '../style/index.css';

namespace CommandIDs {
  export const signet = 'aarnet:signet';
  export const help = 'aarnet:help';
}

/**
 * Initialization data for the jupyterlab-ext-aarnet-help extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ext-aarnet-help',
  autoStart: true,
  requires: [
    ICommandPalette,
    IMainMenu
  ],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette, mainMenu: IMainMenu) => {
    //SIGnet
    app.commands.addCommand(CommandIDs.signet, {
      label: 'SIGnet - SWAN Special Interest Group',
      execute: () => {
        window.open('https://signet.aarnet.edu.au/','_blank');
      }
    });
    //KB
    app.commands.addCommand(CommandIDs.help, {
      label: 'CloudStor SWAN Support',
      execute: () => {
        window.open('https://support.aarnet.edu.au/hc/en-us/sections/360000129695-CloudStor-SWAN','_blank');
      }
    });
    mainMenu.helpMenu.addGroup([
      { command: CommandIDs.signet },
      { command: CommandIDs.help }
    ], 20);
  }
};

export default extension;
