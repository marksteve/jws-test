import fileinput

from itsdangerous import JSONWebSignatureSerializer

s = JSONWebSignatureSerializer("secret")
for sig in fileinput.input():
    print(s.loads(sig.strip()))
