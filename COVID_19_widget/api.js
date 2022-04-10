'use strict';

const Client = require('aliyun-api-gateway').Client;
const client = new Client('204053033','mmcRaiQ4lnOvTgKyNLbv5k8xSmRpuPBF');

async function post() {
  var url = 'http://ncovdata.market.alicloudapi.com/ncov/cityDiseaseInfoWithTrend';

  var result = await client.get(url, {
    headers: {
      accept: 'application/json'
    }
  });

  console.log(JSON.stringify(result));
}

post().catch((err) => {
  console.log(err.stack);
});