import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const s = uploadPhoto();
  const t = createUser();

  return Promise.all([s, t]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
