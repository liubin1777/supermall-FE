export const browserEnvExec = (cb) => {
  if (typeof window !== 'undefined' && cb) {
    return cb();
  }
}