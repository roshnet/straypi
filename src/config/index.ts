/* Read env variables and export config for global use */

export default {
  port: Number(process.env.PORT) || 3000,
}
