import { readdir } from 'fs/promises';

async function getFilesNames(path) {
  const fileList = await readdir(path);

  for await (const file of fileList) {
    console.log(`${file}`);
  }
}
