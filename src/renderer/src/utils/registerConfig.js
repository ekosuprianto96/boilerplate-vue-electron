// import fs from 'fs';
// import { defineStore } from 'pinia';

// let mainConfig;
// try {
//     fs.readFile('./apm.config.json', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err)
//         return
//       }
//       mainConfig = JSON.parse(data)
//     })
// }catch(e) {
//     console.log(e)
//     alert('Error brow')
// }

// export const useConfig = defineStore('config', {
//   state: () => {
//     return {
//       config: mainConfig
//     }
//   }
// })