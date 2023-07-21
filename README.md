# kubernetes-nodejs-mysql-local

## Ref : [tistory](https://codecollector.tistory.com/1337)

## create namespace
```
k create namespace kin # kubernetes-inner-network
```

## deploy mysql
```
kubectl apply -f mysql/mysql-replicaset.yaml --namespace=kin
kubectl apply -f mysql/mysql-service.yaml --namespace=kin
```

## docker build
```
cd app
docker build . -t clucle/node-app
cd ..
```

## deploy app
```
kubectl apply -f deploy/app-replicaset.yaml --namespace=kin
kubectl apply -f deploy/app-service.yaml --namespace=kin
```

---
## Utils

# pod restart
```
k delete pod myweb-mysql-[hash..] -n kin
```

# show pod & services
```
k get pod -n kin
k get svc -n kin
```

# exec mysql in pod
```
k -n kin exec -it myweb-mysql-[hash..] bash

# password : password
mysql -uroot -p

# when mysql error : Client does not support authentication protocol 
#                    requested by server; consider upgrading MySQL client
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
```

