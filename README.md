# get-workspace-version

Prints the version of a npm workspace.

## usage

Given a project with npm workspaces:

```
+ project
|- package.json 
|+ workspaces
 |+ my-package
  |- package.json
```

Running via `npx`:

```shell
cd ./project
npx get-workspace-version my-package # prints the version from 'workspaces/my-package/package.json'
```

## cli

```
get-workspace-version <workspaceName>
```