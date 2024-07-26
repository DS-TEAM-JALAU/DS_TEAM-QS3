import pino, { destination } from "pino";
import pretty from "pino-pretty";
const transport = pino.transport({
	targets: [
		{
			level: "trace",
			target: "pino/file",
			options: {
				destination: "logs/logs.log",
			},
		},
		{
			level: "trace",
			target: "pino-pretty",
			options: {},
		},
	],
});

export const logger = pino(
	{
		enabled: !(process.env.JEST_WORKER_ID !== undefined),
		level: "debug",
	},
	transport,
);
