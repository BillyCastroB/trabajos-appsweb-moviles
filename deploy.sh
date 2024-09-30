#!/usr/bin/env sh

# abortar en caso de error
set -e

# compilar el proyecto
npm run build

# navegar a la carpeta de salida de compilación
cd dist

# inicializar un nuevo repositorio git
git init
git add -A
git commit -m 'deploy'

# si estás desplegando en https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# si estás desplegando en https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:BillyCastroB/trabajos-insti-apps.git main:gh-pages

# volver al directorio anterior
cd -
