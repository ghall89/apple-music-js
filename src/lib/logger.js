import pino, { destination } from "pino";

export const logger = pino(destination({ dest: "./log.txt", sync: false }));
