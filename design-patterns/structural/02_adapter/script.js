class ExternalLogger {
  writeInfo(msg, timestamp) {
    console.log(`[${timestamp.toISOString()}] INFO: ${msg}`);
  }

  writeError(msg, timestamp, code) {
    console.log(`[${timestamp.toISOString()}] ERROR ${code}: ${msg}`);
  }
}

class LoggerAdapter {
  constructor(logger) {
    this.logger = logger;
  }

  log(message) {
    this.logger.writeInfo(message, new Date());
  }

  error(message) {
    this.logger.writeError(message, new Date(), 500);
  }
}

const logger = new LoggerAdapter(new ExternalLogger());

logger.log("This is an informational message.");
logger.error("This is an error message.");
