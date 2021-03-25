import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (error) {
    console.log('Error loading manifest', error);
  }
};

export default getManifest;
