import gcp from '../assets/svg/skills/gcp.svg'
import node from '../assets/svg/skills/node.svg'
import express from '../assets/svg/skills/express.svg'
import sql from '../assets/svg/skills/sql.svg'
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import docker from '../assets/svg/skills/docker.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from '../assets/svg/skills/react.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import capacitorjs from '../assets/svg/skills/capacitorjs.svg'
import coffeescript from '../assets/svg/skills/coffeescript.svg'
import memsql from '../assets/svg/skills/memsql.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import dart from '../assets/svg/skills/dart.svg'
import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
import julia from '../assets/svg/skills/julia.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import ruby from '../assets/svg/skills/ruby.svg'
import swift from '../assets/svg/skills/swift.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import aws from '../assets/svg/skills/aws.svg'
import deno from '../assets/svg/skills/deno.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'


 


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        
        case 'html':
            return html;
         
        case 'sql':
            return sql;
      
        case 'css':
            return css;
       
        case 'javascript':
            return javascript;
       
        case 'react':
            return react;
         
        case 'typescript':
            return typescript;
         
        case 'bootstrap':
            return bootstrap;
 
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        
        case 'java':
            return java;

        case 'python':
            return python;
        case 'node js':
            return node;
        case 'express js': 
            return express;
        
        case 'django':
            return django;
        case 'git':
            return git;
        default:
            break;
    }
}
