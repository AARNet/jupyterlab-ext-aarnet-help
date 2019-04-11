# jupyterlab-ext-aarnet-help

Add Help button to jupyterlab help menu, to link to aarnet support page


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @aarnet/jupyterlab-ext-aarnet-help
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

