function serverConfigBuilder() {
  const config = {
    host: "localhost",
    port: 80,
    protocol: "http",
  };

  return {
    setHost(host) {
      config.host = host;
      return this;
    },
    setPort(port) {
      config.port = port;
      return this;
    },
    setProtocol(protocol) {
      config.protocol = protocol;
      return this;
    },
    build() {
      return config;
    },
  };
}

const devConfig = serverConfigBuilder()
  .setHost("dev.example.com")
  .setPort(8080)
  .setProtocol("https")
  .build();

console.log(devConfig);
