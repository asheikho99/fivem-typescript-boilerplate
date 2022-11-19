const { resolve } = require('path')
const { build } = require('esbuild')

build({
    entryPoints: ['./client/client.ts', './server/server.ts'],
    outdir: resolve(__dirname, 'build'),
    bundle: true,
    minify: true,
    platform: 'browser',
    target: 'es2020',
    logLevel: 'info'
}).catch(() => process.exit(1))