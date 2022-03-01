oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g poc-oclif-generate
$ poc-oclif-generate COMMAND
running command...
$ poc-oclif-generate (--version)
poc-oclif-generate/0.0.0 darwin-x64 node-v16.14.0
$ poc-oclif-generate --help [COMMAND]
USAGE
  $ poc-oclif-generate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`poc-oclif-generate hello PERSON`](#poc-oclif-generate-hello-person)
* [`poc-oclif-generate hello world`](#poc-oclif-generate-hello-world)
* [`poc-oclif-generate help [COMMAND]`](#poc-oclif-generate-help-command)
* [`poc-oclif-generate plugins`](#poc-oclif-generate-plugins)
* [`poc-oclif-generate plugins:inspect PLUGIN...`](#poc-oclif-generate-pluginsinspect-plugin)
* [`poc-oclif-generate plugins:install PLUGIN...`](#poc-oclif-generate-pluginsinstall-plugin)
* [`poc-oclif-generate plugins:link PLUGIN`](#poc-oclif-generate-pluginslink-plugin)
* [`poc-oclif-generate plugins:uninstall PLUGIN...`](#poc-oclif-generate-pluginsuninstall-plugin)
* [`poc-oclif-generate plugins update`](#poc-oclif-generate-plugins-update)

## `poc-oclif-generate hello PERSON`

Say hello

```
USAGE
  $ poc-oclif-generate hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/herberttn/pocs-oclif-generate/blob/v0.0.0/dist/commands/hello/index.ts)_

## `poc-oclif-generate hello world`

Say hello world

```
USAGE
  $ poc-oclif-generate hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `poc-oclif-generate help [COMMAND]`

Display help for poc-oclif-generate.

```
USAGE
  $ poc-oclif-generate help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for poc-oclif-generate.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `poc-oclif-generate plugins`

List installed plugins.

```
USAGE
  $ poc-oclif-generate plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ poc-oclif-generate plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `poc-oclif-generate plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ poc-oclif-generate plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ poc-oclif-generate plugins:inspect myplugin
```

## `poc-oclif-generate plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ poc-oclif-generate plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ poc-oclif-generate plugins add

EXAMPLES
  $ poc-oclif-generate plugins:install myplugin 

  $ poc-oclif-generate plugins:install https://github.com/someuser/someplugin

  $ poc-oclif-generate plugins:install someuser/someplugin
```

## `poc-oclif-generate plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ poc-oclif-generate plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ poc-oclif-generate plugins:link myplugin
```

## `poc-oclif-generate plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ poc-oclif-generate plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ poc-oclif-generate plugins unlink
  $ poc-oclif-generate plugins remove
```

## `poc-oclif-generate plugins update`

Update installed plugins.

```
USAGE
  $ poc-oclif-generate plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
