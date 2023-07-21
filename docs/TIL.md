
## ReplicaSet vs Deployments

### ReplicaSet
 - pod 의 원하는 복제본 수 만큼 관리하는 low-level abstraction
 - replica 의 갯수만 관리하고, update 나 rollback 등을 제공하지 않음

### Deployments
 - rolling update 나 rollback 등 기능을 제공하는 high-level abstraction
 - 하위에 Replicaset 을 제어

---

 ## kubernetes labels & selectors
 
 ### labels

 - 키 벨류 페어
 - 오브젝트의 특성을 식별하는데 사용
 - 코어 시스템에 직접적인 의미 없음 

```
"metadata": {
  "labels": {
    "key1" : "value1",
    "key2" : "value2"
  }
}
```

### selector

 - 지정된 label 에 부합하는지 확인
 - 동일한 label 또는 집합에 속한 label 인지 확인 가능

```
# pod 를 실행할 node 를 선택 할 때, label 에 부합한 node 를 찾습니다.

apiVersion: v1
kind: Pod
metadata:
  name: cuda-test
spec:
  ...
  nodeSelector:
    accelerator: nvidia-tesla-p100
```

---

