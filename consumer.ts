import { spawn } from 'child_process';

const command = 'npm run start:dev';
const defaultOptions = {
  cwd: './consumer',
  shell: true,
  stdio: 'inherit'
};

export function consumer(opts?: any) {
  spawn(command, (opts) ? opts : defaultOptions);
};
