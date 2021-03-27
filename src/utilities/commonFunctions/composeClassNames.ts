const composeClassNames = (...arg: Array<string>): string=> {
  return arg.reduce((prev, curr) => `${prev} ${curr}`);
}

export default composeClassNames