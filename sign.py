from itsdangerous import JSONWebSignatureSerializer

s = JSONWebSignatureSerializer("secret")
print(s.dumps({"query": "test"}).decode())
