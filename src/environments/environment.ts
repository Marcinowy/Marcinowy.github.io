// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Skill } from "src/app/models/skill";

export const environment = {
  production: false
};

export const skillsFakeApiData: Skill[] = [
  {
    name: 'Typescript',
    image: 'ts.png',
    expTime: 12 * 2,
    knowledge: 0.75,
    type: 'Frontend',
  },
  {
    name: 'Angular',
    image: 'angular.png',
    expTime: 12 * 2,
    knowledge: 0.7,
    type: 'Frontend',
  },
  {
    name: 'Angular Material',
    image: 'material.png',
    expTime: 12 * 2,
    knowledge: 0.75,
    type: 'Frontend',
  },
  {
    name: 'JQuery',
    image: 'jquery.png',
    expTime: 12 * 5,
    knowledge: 0.8,
    type: 'Frontend',
  },
  {
    name: 'Bootstrap',
    image: 'bootstrap.png',
    expTime: 12 * 4,
    knowledge: 0.8,
    type: 'Frontend',
  },
  {
    name: 'Node.js',
    image: 'nodejs.png',
    expTime: 12 * 4,
    knowledge: 0.7,
    type: 'Backend',
  },
  {
    name: 'Laravel',
    image: 'laravel.png',
    expTime: 12 * 2,
    knowledge: 0.75,
    type: 'Backend',
  },
  {
    name: 'MySQL',
    image: 'mysql.png',
    expTime: 12 * 5,
    knowledge: 0.85,
    type: 'Backend',
  },
  {
    name: 'Socket.io',
    image: 'socketio.png',
    expTime: 12 * 4,
    knowledge: 0.5,
    type: 'Backend',
  },
  {
    name: 'PHP',
    image: 'php.png',
    expTime: 12 * 6,
    knowledge: 0.9,
    type: 'Backend',
  },
  {
    name: 'Python',
    image: 'python.png',
    expTime: 12 * 2,
    knowledge: 0.8,
    type: 'Backend',
  },
  {
    name: 'C#',
    image: 'cs.png',
    expTime: 12 * 1,
    knowledge: 0.1,
    type: 'Backend',
  },
  {
    name: 'SCSS',
    image: 'scss.png',
    expTime: 12 * 2,
    knowledge: 0.65,
    type: 'Frontend',
  },
  {
    name: 'Linux / Ubuntu',
    image: 'ubuntu.png',
    expTime: 12 * 4,
    knowledge: 0.7,
    type: 'Others',
  },
  {
    name: 'RegEx',
    image: 'regex.png',
    expTime: 12 * 3,
    knowledge: 0.95,
    type: 'Others',
  },
  {
    name: 'Reverse Engineering',
    image: 'reverse.png',
    expTime: 12 * 3,
    knowledge: 0.95,
    type: 'Others',
  },
  {
    name: 'Wireshark',
    image: 'wireshark.png',
    expTime: 12 * 2,
    knowledge: 0.5,
    type: 'Others',
  },
  {
    name: 'JIRA',
    image: 'jira.png',
    expTime: 2,
    knowledge: 0.5,
    type: 'Others',
  },
  {
    name: 'Googling',
    image: 'google.png',
    expTime: 0,
    knowledge: 0,
    description: 'I\'m not a God. If I don\'t know something, I just google it. And I\'m really good at it ;)',
    type: 'Others',
  },
];

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
