omni
=================

Multi-purpose CLI I'm building for personal use


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/omni.svg)](https://npmjs.org/package/omni)
[![Downloads/week](https://img.shields.io/npm/dw/omni.svg)](https://npmjs.org/package/omni)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g omni
$ omni COMMAND
running command...
$ omni (--version)
omni/0.0.0 win32-x64 node-v20.11.1
$ omni --help [COMMAND]
USAGE
  $ omni COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`omni help [COMMAND]`](#omni-help-command)
* [`omni plugins`](#omni-plugins)
* [`omni plugins add PLUGIN`](#omni-plugins-add-plugin)
* [`omni plugins:inspect PLUGIN...`](#omni-pluginsinspect-plugin)
* [`omni plugins install PLUGIN`](#omni-plugins-install-plugin)
* [`omni plugins link PATH`](#omni-plugins-link-path)
* [`omni plugins remove [PLUGIN]`](#omni-plugins-remove-plugin)
* [`omni plugins reset`](#omni-plugins-reset)
* [`omni plugins uninstall [PLUGIN]`](#omni-plugins-uninstall-plugin)
* [`omni plugins unlink [PLUGIN]`](#omni-plugins-unlink-plugin)
* [`omni plugins update`](#omni-plugins-update)
* [`omni video grab URL OUTPUTDIR`](#omni-video-grab-url-outputdir)

## `omni help [COMMAND]`

Display help for omni.

```
USAGE
  $ omni help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for omni.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `omni plugins`

List installed plugins.

```
USAGE
  $ omni plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ omni plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/index.ts)_

## `omni plugins add PLUGIN`

Installs a plugin into omni.

```
USAGE
  $ omni plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into omni.

  Uses bundled npm executable to install plugins into C:\Users\accsl\AppData\Local\omni

  Installation of a user-installed plugin will override a core plugin.

  Use the OMNI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OMNI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ omni plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ omni plugins add myplugin

  Install a plugin from a github url.

    $ omni plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ omni plugins add someuser/someplugin
```

## `omni plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ omni plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ omni plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/inspect.ts)_

## `omni plugins install PLUGIN`

Installs a plugin into omni.

```
USAGE
  $ omni plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into omni.

  Uses bundled npm executable to install plugins into C:\Users\accsl\AppData\Local\omni

  Installation of a user-installed plugin will override a core plugin.

  Use the OMNI_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the OMNI_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ omni plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ omni plugins install myplugin

  Install a plugin from a github url.

    $ omni plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ omni plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/install.ts)_

## `omni plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ omni plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ omni plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/link.ts)_

## `omni plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ omni plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ omni plugins unlink
  $ omni plugins remove

EXAMPLES
  $ omni plugins remove myplugin
```

## `omni plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ omni plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/reset.ts)_

## `omni plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ omni plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ omni plugins unlink
  $ omni plugins remove

EXAMPLES
  $ omni plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/uninstall.ts)_

## `omni plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ omni plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ omni plugins unlink
  $ omni plugins remove

EXAMPLES
  $ omni plugins unlink myplugin
```

## `omni plugins update`

Update installed plugins.

```
USAGE
  $ omni plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.18/src/commands/plugins/update.ts)_

## `omni video grab URL OUTPUTDIR`

Download a video from a URL. If it is a playlist, download all videos in the playlist.

```
USAGE
  $ omni video grab URL OUTPUTDIR

ARGUMENTS
  URL        URL of the video/playlist to download
  OUTPUTDIR  Output directory

DESCRIPTION
  Download a video from a URL. If it is a playlist, download all videos in the playlist.

EXAMPLES
  $ omni video grab
```

_See code: [src/commands/video/grab.ts](https://github.com/reonardoleis/omni/blob/v0.0.0/src/commands/video/grab.ts)_
<!-- commandsstop -->
