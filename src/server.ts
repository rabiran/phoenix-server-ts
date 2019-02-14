import app from "./app";

/**
 * start express server
 */

const server = app.listen(app.get('port'), () => {
  console.log(`  App is Running at port ${app.get('port')} in ${app.get('env')} mode`);
  console.log('  Press CTRL-C to stop\n');
});
