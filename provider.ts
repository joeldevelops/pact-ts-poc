import { spawn } from 'child_process';

const command = 'npm run start:dev';
const defaultOptions = {
  cwd: './provider',
  shell: true,
  stdio: 'inherit'
};

export function provider(opts?: any) {
  spawn(command, (opts) ? opts : defaultOptions);
}
