const externalLogger = {
  writeInfo: (msg, timestamp) => {
    console.log(`[${timestamp.toISOString()}] INFO: ${msg}`);
  },

  writeError: (msg, timestamp, code) => {
    console.log(`[${timestamp.toISOString()}] ERROR ${code}: ${msg}`);
  },
};

const loggerAdapter = {
  log: (message) => {
    externalLogger.writeInfo(message, new Date());
  },

  error: (message) => {
    externalLogger.writeError(message, new Date(), 500);
  },
};

loggerAdapter.log("This is an informational message.");
loggerAdapter.error("This is an error message.");
