#!/usr/bin/env node
const path = require('path')
const mapWorkspaces = require('@npmcli/map-workspaces')

async function main (workspaceName) {
  const cwd = process.cwd()
  const packagejson = require(path.join(cwd, 'package.json'))
  let result = await mapWorkspaces({
    cwd,
    pkg: packagejson
  })
  if (!result.get(workspaceName)) {
    console.log('workspace', workspaceName, 'not found')
    process.exit(1)
  }
  const workspacePackagejson = require(path.join(result.get(workspaceName),  'package.json'))
  console.log(workspacePackagejson.version)
}

main(process.argv[2])