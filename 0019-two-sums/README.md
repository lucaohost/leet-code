## 🧩 Two Sum

Dado um array de inteiros `nums` e um inteiro `target`, retorne os **índices dos dois números** tais que eles somam exatamente `target`.

Você pode assumir que:

* Existe **exatamente uma solução válida**.
* Você **não pode usar o mesmo elemento duas vezes**.
* A resposta pode ser retornada em qualquer ordem.

---

### 📥 Exemplo 1

```
Input:
nums = [2,7,11,15]
target = 9

Output:
[0,1]

Explicação:
nums[0] + nums[1] = 2 + 7 = 9
```

---

### 📥 Exemplo 2

```
Input:
nums = [3,2,4]
target = 6

Output:
[1,2]
```

---

### 📥 Exemplo 3

```
Input:
nums = [3,3]
target = 6

Output:
[0,1]
```

---

### 📌 Restrições

* 2 ≤ nums.length ≤ 10⁴
* -10⁹ ≤ nums[i] ≤ 10⁹
* -10⁹ ≤ target ≤ 10⁹
