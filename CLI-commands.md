# CLI commands

Here I will try to document the commands used to generate the scaffoldings.

````
ng new angular-cli-seed --style scss --skip-test --skip-install --routing
ng g module --routing Home
ng g c home/components/Home --m home --spec false
ng g module appcommon --module app
ng g module appcommon --module app

ng g i home/models/Post
ng g s home/services/JsonServer --spec false
ng g i appcommon/models/User
ng g i appcommon/models/Roles

ng g c home/components/header --spec false --m home
ng g c home/components/footer --spec false --m home

ng g module --routing Demo -m App
ng g c demo/components/DemoLanding --spec false --m demo

ng g d appcommon/directives/busy --spec false -m appcommon

ng g s appcommon/services/app --spec false -m appcommon

````

### prod build with stats.json generated.
````
ng build --prod --stats-json
````