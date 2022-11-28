import FluxGatewayApi from "../../src/Adapters/Api/FluxGatewayApi.mjs";
const applicationName = "example-app"
const definitionsBaseUrl = window.location + "definitions";

const gateway = await FluxGatewayApi.initialize(
  {
    applicationName: applicationName,
    logEnabled: true,
    definitionsBaseUrl: definitionsBaseUrl,
  },
);
gateway.initActor();