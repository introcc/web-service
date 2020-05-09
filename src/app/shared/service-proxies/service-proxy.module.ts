import { NgModule } from '@angular/core';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
  providers: [
    ApiServiceProxies.AccountServiceProxy,
    ApiServiceProxies.UserServiceProxy
  ]
})
export class ServiceProxyModule {
}
