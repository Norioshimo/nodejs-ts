# Proyecto de Node.js + TypeScript

Este proyecto utiliza Node.js, TypeScript, Sequelize y MySQL para crear servicios básicos.

## 1. Instalación de Dependencias

Primero, instala todas las dependencias del proyecto ejecutando:
`yarn install`

## 2. Levantar(Docker) la base de datos:
La base de datos MYSQL se levanta en el puerto 3307.
```
docker compose up -d
```

## 3. Crear tabla

Crear el usuario.sql para crear la tabla

## 4. Configurar valiable de entorno.

Copiar el archivo `.env.template` y modifiar a `.env`

## 5. Compilación

Para compilar el proyecto, ejecuta: `yarn run build`.
Esto compilará el código TypeScript en JavaScript. También puedes usar tsc directamente si lo prefieres.

## 6. Desarrollo

Para levantar el proyecto en modo de desarrollo, utiliza:
`yarn run dev`

## 7. Endpoints

Usuarios: localhost:3000/api/usuarios

## 8. Recursos Adicionales

Consulta la documentación de Sequelize para más información:

1. [Documentación de Sequealize](sequelize.org/docs/v6/getting-started/)
