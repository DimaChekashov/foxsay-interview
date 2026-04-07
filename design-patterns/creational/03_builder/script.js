class ServerConfig {
  constructor(host, port, ssl, timeout, maxConnections) {
    this.host = host;
    this.port = port;
    this.ssl = ssl;
    this.timeout = timeout;
    this.maxConnections = maxConnections;
  }
}

class ServerConfigBuilder {
  host = "localhost";
  port = 3000;
  ssl = false;
  timeout = 5000;
  maxConnections = 100;

  setHost(host) {
    this.host = host;
    return this;
  }

  setPort(port) {
    if (port < 0 || port > 65535) throw new Error("Невалидный порт");
    this.port = port;
    return this;
  }

  setSSL(ssl) {
    this.ssl = true;
    this.port = 443;
    return this;
  }

  setTimeout(timeout) {
    this.timeout = timeout;
    return this;
  }

  setMaxConnections(maxConnections) {
    this.maxConnections = maxConnections;
    return this;
  }

  build() {
    return new ServerConfig(
      this.host,
      this.port,
      this.ssl,
      this.timeout,
      this.maxConnections,
    );
  }
}

const devConfig = new ServerConfigBuilder()
  .setHost("dev.example.com")
  .setPort(8080)
  .setTimeout(10000)
  .build();

const prodConfig = new ServerConfigBuilder()
  .setHost("example.com")
  .setSSL(true)
  .setMaxConnections(1000)
  .build();

console.log(devConfig);
console.log(prodConfig);