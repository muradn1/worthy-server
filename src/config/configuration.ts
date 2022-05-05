
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mainEntry: process.env.MAIN_ENTRY || ''
});