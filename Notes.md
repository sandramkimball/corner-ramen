New App Startup Workflow

- 'yarn add -g @angular/cli'
- 'ng new my-cool-app (--skip-npm && yarn)'
- 'cd my-cool-app'
- 'cd my-cool-app'
- 'ng serve' (npm/yarn start?)

<!-- setup app -->
- add HttpClientModule to app.module.ts
- add {Routes, RouterModule} from '@angular/router to app-routing.module.ts

<!-- add Material UI - OPTIONAL* -->
- 'ng add @angular/material'
- add import {MatToolbarModule, MatButtonModule, MatCardModule...} from '@angular/material to app.module.ts
- add to imports array 
- To Use: <button mat-button routerLink='/'>Home</button>

<!-- create UI components -->
- ng g component homepage
- add pg routes to app-routing

<!-- Mock REST API -->
- 'yarn add json-server'
- 'mkdir server' to create server folder
- 'cd server'
- create database.json file and add:
    {
        "reviews": []
    }

- 'cd ..' and 'yarn add faker --save' --OPTIONAL*
- add server to package.json scripts:
    "server": "json-server --watch ./server/database.json"
- 'yarn run server'

<!-- Using HttpClient -->
- create Angular service to encapsulate code that consumes data from api server:
- 'ng g service api'
- add import {HttpClient} from '@angular/common/http' and inject to api.service.ts
- define SERVER_URL (to localhost prob)
- define get()
- use new data in component.html
- be sure to catchError

<!-- Pagination? I think this is parsing for firebase-->
- import retry, catchError, tap from 'rxjs/operators' to data.service.ts
- add public first, last, prev, next strings
- add parseLinkeHeader()
- update sendGetRequest()
- update subscribe in ~.component.ts

<!-- Build and Deploy -->
- be sure to have firebase account
- 'ng add @angular/fire'
- this autoupdates angular.json 'deploy'
- 'ng deploy'
