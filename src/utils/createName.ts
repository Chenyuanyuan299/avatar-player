import startCase from 'lodash/startCase';

export default function createName(...args: string[]): string {
  return args.map((value) => startCase(value)).join('');
}
