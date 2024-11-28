/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "microblog",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: "5.37.1" },
    };
  },
  async run() {
    new sst.aws.Astro("MyWeb", {
      domain:{
        name: "andrewbhudson.dev",
        dns: sst.cloudflare.dns()
      }
    });
   
    
  }, 
  
});
