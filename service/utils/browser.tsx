export const browserEnvExec = (cb : () => any) => {
  if (typeof window !== 'undefined' && cb) {
    return cb();
  }
}