import * as fs from 'fs';

function clean() {
  const PATH = `${__dirname}/../build`;
  
  if (fs.existsSync(PATH)) {
    fs.rmdirSync(PATH, { recursive: true });
  }
}

clean();
