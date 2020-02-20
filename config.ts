export class Config {
  public static usePactBroker = false;
  public static pactBrokerPort = 80;
  public static pactBrokerUrl = `http://localhost:${Config.pactBrokerPort}`;

  public static consumerName = 'Consumer';
  public static consumerVersion = '2.0.0';
  public static consumerStatusCode = 200;
  public static consumerPort = 3000;

  public static providerName = 'Provider';
  public static providerVersion = '2.0.0';
  public static providerStatusCode = 200;
  public static providerPort = 5000;
  public static providerBaseUrl = `http://localhost:${Config.providerPort}`;
  public static providerEndpoint = 'provider';
}