## Building Modern web applications

This a simple CRUD basketball application made with react js and Node js as api server.

This code might help beginner developers willing to learn how to use React js, state management with redux, Thunks as middleware 
and adding customize css with styled-components

This project is a starting point for a React js application.

### Technologies
* React js
* Node js (Express, uuid, cors)
* React Router
* Redux
* Redux-persist
* Styled Components
* Reselect
* Mocha (test)
* Chai (test)

### Prerequisites
* Follow this step by step for installing Node JS: - [Installing Node JS](https://nodejs.org/es/)

### Getting Started

1- Clone repository

```
git clone https://github.com/franchyreyes/react-web-applications.git
```
2- Move away the API-NODE-SERVER folder from the main (react-web-applications) folder, because it is another project.

3- Install Dependencies (Server Side), go to the folder API-NODE-SERVER  and:
```
npm install
```
4- Run the server
```
npm run start
```
5 - Go to your browser: [localhost:8080/players](http://localhost:8080/players) 
```
http://localhost:8080/players
```
Json Data From the Server
```
[
   {
      "id":"ae06181d-92c2-4fed-a29d-fb53a6301eb9",
      "team":"Chicago Bull",
      "backNumber":20,
      "name":"Franchy Reyes",
      "color":"#CE1141",
      "points":52,
      "mvp":3,
      "createdAt":"2021-05-21T20:38:30.845Z"
   },
   {
      "id":"cda9165d-c263-4ef6-af12-3f1271af5fb4",
      "team":"Los Angeles Lakers",
      "backNumber":40,
      "name":"Luis Peña",
      "color":"#552583",
      "points":20,
      "mvp":2,
      "createdAt":"2021-05-14T20:38:30.845Z"
   },
   {
      "id":"cda9165d-c263-4ef6-af12-3f1271af5fb4",
      "team":"Dallas Mavericks",
      "backNumber":21,
      "name":"Victor Rincon",
      "color":"#00538C",
      "points":40,
      "mvp":1,
      "createdAt":"2021-05-14T20:38:30.845Z"
   }
   ```

6- Install Dependencies (Client Side)
go to the folder where you clone the repo and:
```
npm install
```
7 start using
```
npm run dev
```

8 start using

go check it at  [localhost:3000](http://localhost:3000/)  .
## Credits
Created with love by  [Franchy Reyes](https://github.com/franchyreyes).

## License
```
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
Any question feel free to contact me at franchyreyes@hotmail.com