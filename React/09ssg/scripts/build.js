// // For Static side Rendering
// //SSR
// // a template


// import ReactDOMServer from 'react/server'
// // generate all html in the server


// ReactDOMServer.renderToStatticMarkup(
//     React.createElement(App, {teas})
// )



import fs from 'fs-extra'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {fileURLToPath} from 'url'
import {teas} from "../src/data.js"
import App from "../src/App.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)  //only used for module not in comman js

const outDir = path.resolve(__dirname,"../dist") 
const htmlTemplatePath = path.resolve(__dirname,"../src/template.html") 

const outputHtmlPath = path.resolve(outDir, "index.html");

const template = await fs.readFile(htmlTemplatePath, "utf-8");

//renderToString for SSR
//ToStaticMarku for SSG
const appHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(App,({teas}))
)


const finalHtml = template.replace("<!--app-->", appHtml);

await fs.ensureDir(outDir);
await fs.writeFile(outputHtmlPath, finalHtml);
